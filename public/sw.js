self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Aquí podrías añadir lógica de caché en el futuro, 
  // por ahora solo deja pasar las peticiones nativas.
  event.respondWith(fetch(event.request));
});