const CACHE_NAME = 'venmail-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/pricing',
  '/resources/partner',
  '/resources/faqs',
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
  '/app-manifest.json',
  '/video.mp4',
  '/video-poster.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Cache each URL individually to handle failures gracefully
        return Promise.all(
          urlsToCache.map(url => {
            return fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`Failed to fetch ${url}: ${response.status}`);
                }
                return cache.put(url, response);
              })
              .catch(error => {
                console.error(`Failed to cache ${url}:`, error);
                // Continue with other URLs even if one fails
                return Promise.resolve();
              });
          })
        );
      })
      .catch(error => {
        console.error('Service Worker installation failed:', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache)
                  .catch(error => {
                    console.error('Failed to cache response:', error);
                  });
              });
            return response;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            // Return a fallback response if available
            return caches.match('/offline.html');
          });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 