/* Read Fast — service worker.
 *
 * Copyright (c) 2026 JohnsonXCorp. All rights reserved.
 * PROPRIETARY. Not open source. No permission is granted to copy, modify,
 * redistribute or create derivative works from this file.
 * See https://github.com/ThePastor/read-fast/blob/main/LICENSE
 *
 * The cache name carries the build version, so shipping a release retires the
 * previous cache in activate(). The page is told when a new worker is waiting
 * and offers a Reload, rather than swapping the app out underneath the reader.
 */
var VERSION = 'v16';
var CACHE = 'read-fast-' + VERSION;
var DOC = new URL('./', self.location).href;
var SHELL = [
  './', './manifest.webmanifest', './favicon.png', './apple-touch-icon.png',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) {
      return (k !== CACHE && k.indexOf('read-fast-') === 0) ? caches.delete(k) : null;
    }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('message', function (e) {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

function isFont(u) {
  return u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com';
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  // Webfonts: cache-first. They never change, and without them the reading
  // word falls back to a different face — very visible.
  if (isFont(url)) {
    e.respondWith(caches.open(CACHE).then(function (cache) {
      return cache.match(req).then(function (hit) {
        if (hit) return hit;
        return fetch(req).then(function (res) {
          if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
          return res;
        }).catch(function () { return hit || Response.error(); });
      });
    }));
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Same origin: answer from cache at once, refresh in the background.
  // Navigations are keyed on the bare directory URL so that ?cb= cache-busters
  // (used when verifying a release) don't pile up as separate entries.
  e.respondWith(caches.open(CACHE).then(function (cache) {
    var key = req.mode === 'navigate' ? DOC : req;
    return cache.match(key).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(function () { return null; });
      if (hit) return hit;
      return net.then(function (res) {
        return res || new Response('Read Fast is offline and this page was never cached.',
          { status: 503, headers: { 'Content-Type': 'text/plain' } });
      });
    });
  }));
});
