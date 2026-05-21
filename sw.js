const CACHE = 'noticeboard-v3';
const ASSETS = ['/team-noticeboard/', '/team-noticeboard/index.html', '/team-noticeboard/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('data.json') ||
      e.request.url.includes('open-meteo.com') ||
      e.request.url.includes('wttr.in') ||
      e.request.url.includes('rss2json') ||
      e.request.url.includes('wikipedia.org') ||
      e.request.url.includes('uselessfacts') ||
      e.request.url.includes('gov.uk') ||
      e.request.url.includes('fonts.googleapis')) return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
