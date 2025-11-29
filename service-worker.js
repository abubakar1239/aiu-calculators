self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('Aiu-Gev cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './projects.html',
        './manifest.json'
      ]);
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