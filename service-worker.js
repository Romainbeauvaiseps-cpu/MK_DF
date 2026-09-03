const CACHE_NAME = 'mk-df-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'logo.webp',
  'mario_kart_DF1.webp',
  'fdecran.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
