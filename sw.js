const CACHE = 'ib-recruit-v1';

const PRECACHE = [
  './',
  './index.html',
  './styles.css',
  './auth.js',
  './game.js',
  './modules.js',
  './lessons.js',
  './lessons-core.js',
  './lessons-adv-accounting.js',
  './lessons-ev.js',
  './lessons-valuation.js',
  './lessons-ma.js',
  './lessons-lbo.js',
  './questions.js',
  './questions-core.js',
  './questions-adv-accounting.js',
  './questions-ev.js',
  './questions-valuation.js',
  './questions-ma.js',
  './questions-lbo.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first for audio files (large, stream better from network)
  if (e.request.url.includes('/audio/')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-first for everything else
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return response;
      });
    })
  );
});
