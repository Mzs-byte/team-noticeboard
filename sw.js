const CACHE = 'noticeboard-v3';

// Always fetch fresh from network for these
const NETWORK_FIRST = ['index.html', 'data.json', 'wttr.in', 'rss2json', 'fonts.googleapis'];

self.addEventListener('install', e => {
  self.skipWaiting(); // activate immediately
});

self.addEventListener('activate', e => {
  // Wipe ALL old caches on every update
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  const alwaysFresh = NETWORK_FIRST.some(p => url.includes(p));

  if (alwaysFresh) {
    // Network first — fall back to cache only if offline
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache first for static assets (fonts, icons)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200) return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      });
    })
  );
});
