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
        return cache.addAll(urlsToCache);
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
                cache.put(event.request, responseToCache);
              });
            return response;
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