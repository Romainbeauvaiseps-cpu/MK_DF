const CACHE_NAME = 'mk-df-v1';
const ASSETS = [
  'Index.html',
  'manifest.json',
  'logo.webp',
  'Images/Mario_Kart_DF1.webp',
  'Images/fdecran.png'
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
