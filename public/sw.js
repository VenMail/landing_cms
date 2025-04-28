const CACHE_NAME = 'venmail-cache-v1';
const STATIC_CACHE = 'venmail-static-v1';
const DYNAMIC_CACHE = 'venmail-dynamic-v1';

// Static assets that rarely change
const staticAssets = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/js/main.js',
  '/manifest-icon-16.maskable.png',
  '/manifest-icon-32.maskable.png',
  '/manifest-icon-48.maskable.png',
  '/manifest-icon-72.maskable.png',
  '/manifest-icon-96.maskable.png',
  '/manifest-icon-128.maskable.png',
  '/manifest-icon-144.maskable.png',
  '/manifest-icon-152.maskable.png',
  '/manifest-icon-192.maskable.png',
  '/manifest-icon-256.maskable.png',
  '/manifest-icon-384.maskable.png',
  '/manifest-icon-512.maskable.png',
  '/app-manifest.json'
];

// Dynamic pages that might change more frequently
const dynamicPages = [
  '/pricing',
  '/resources/partner',
  '/resources/faqs'
];

self.addEventListener('install', event => {
  // event.waitUntil(
  //   Promise.all([
  //     // Cache static assets
  //     caches.open(STATIC_CACHE).then(cache => {
  //       return Promise.all(
  //         staticAssets.map(url => {
  //           return fetch(url)
  //             .then(response => {
  //               if (!response.ok) throw new Error(`Failed to fetch ${url}`);
  //               return cache.put(url, response);
  //             })
  //             .catch(error => console.error(`Failed to cache ${url}:`, error));
  //         })
  //       );
  //     }),
  //     // Cache dynamic pages
  //     caches.open(DYNAMIC_CACHE).then(cache => {
  //       return Promise.all(
  //         dynamicPages.map(async url => {
  //           return fetch(url)
  //             .then(response => {
  //               if (!response.ok) throw new Error(`Failed to fetch ${url}`);
  //               return cache.put(url, response);
  //             })
  //             .catch(error => console.error(`Failed to cache ${url}:`, error));
  //         })
  //       );
  //     })
  //   ])
  // );
});

self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Handle API requests
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then(cache => cache.put(event.request, responseToCache))
            .catch(error => console.error('Failed to cache API response:', error));
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // For other requests, try cache first
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Update cache in background
          fetch(event.request)
            .then(response => {
              if (response.ok) {
                caches.open(DYNAMIC_CACHE)
                  .then(cache => cache.put(event.request, response))
                  .catch(error => console.error('Failed to update cache:', error));
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        // If not in cache, fetch from network
        return fetch(event.request)
          .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            
            // Cache the response
            const responseToCache = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then(cache => cache.put(event.request, responseToCache))
              .catch(error => console.error('Failed to cache response:', error));
            
            return response;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            // Return offline page for HTML requests
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
            return new Response('Offline', { status: 503 });
          });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 