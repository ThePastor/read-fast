/* Read Fast — service worker.
 *
 * Copyright (c) 2026 Anndy Johnson, operating as JohnsonX Labs. All rights reserved.
 * PROPRIETARY. Not open source. No permission is granted to copy, modify,
 * redistribute or create derivative works from this file.
 * See https://github.com/ThePastor/read-fast/blob/main/LICENSE
 *
 * The cache name carries the build version, so shipping a release retires the
 * previous cache in activate(). The page is told when a new worker is waiting
 * and offers a Reload, rather than swapping the app out underneath the reader.
 */
var VERSION = 'v30';
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

// The natural voice's engine and WebAssembly runtime, pinned to exact versions.
// Pinned URLs never change, so they are kept cache-first in a cache of their
// own that a release does NOT retire — re-downloading 24 MB on every app update
// would be indefensible. (The 92 MB model and the voices are cached by the
// engine itself, in 'transformers-cache' and 'kokoro-voices'; this worker lets
// those requests pass straight through rather than storing them twice.)
var VOICE_CACHE = 'readfast-voice-engine-1';
function isVoiceEngine(u) {
  return u.hostname === 'cdn.jsdelivr.net' &&
    (u.pathname.indexOf('/npm/kokoro-js@1.2.1/') === 0 ||
     u.pathname.indexOf('/npm/@huggingface/transformers@3.5.1/') === 0);
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  // Webfonts: cache-first. They never change, and without them the reading
  // word falls back to a different face — very visible. (v30: the stylesheet
  // is now requested with CORS, which cross-origin isolation is sure to
  // accept; an opaque copy cached by an older build cannot answer a CORS
  // request, so one is fetched again instead.)
  if (isFont(url)) {
    e.respondWith(caches.open(CACHE).then(function (cache) {
      return cache.match(req).then(function (hit) {
        if (hit && !(hit.type === 'opaque' && req.mode === 'cors')) return hit;
        return fetch(req).then(function (res) {
          if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
          return res;
        }).catch(function () { return hit || Response.error(); });
      });
    }));
    return;
  }

  if (isVoiceEngine(url)) {
    e.respondWith(caches.open(VOICE_CACHE).then(function (cache) {
      return cache.match(req).then(function (hit) {
        if (hit) return hit;
        return fetch(req).then(function (res) {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        });
      });
    }));
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Same origin: answer from cache at once, refresh in the background.
  // Navigations are keyed on the bare directory URL so that ?cb= cache-busters
  // (used when verifying a release) don't pile up as separate entries.
  var nav = req.mode === 'navigate';
  e.respondWith(caches.open(CACHE).then(function (cache) {
    var key = nav ? DOC : req;
    return cache.match(key).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(function () { return null; });
      if (hit) return nav ? isolated(hit) : hit;
      return net.then(function (res) {
        if (res) return nav ? isolated(res) : res;
        return new Response('Read Fast is offline and this page was never cached.',
          { status: 503, headers: { 'Content-Type': 'text/plain' } });
      });
    });
  }));
});

// Cross-origin isolation (v30). With these two headers on the page, the
// browser lets it share memory between threads, which is what the natural
// voice's engine needs to work on several processor cores at once — about
// twice as fast, the difference between a voice that pauses between
// sentences and one that does not. GitHub Pages cannot send headers, so this
// worker adds them to the page it serves.
// The price: everything the page loads from another site must say it may be
// (CORS or Cross-Origin-Resource-Policy). Read Fast loads from four: Google
// Fonts (both send both), jsDelivr and Hugging Face (both send CORS) — checked
// in test34.
function isolated(res) {
  if (!res || res.status !== 200 || res.type === 'opaqueredirect' || res.type === 'opaque') return res;
  var h = new Headers(res.headers);
  h.set('Cross-Origin-Opener-Policy', 'same-origin');
  h.set('Cross-Origin-Embedder-Policy', 'require-corp');
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
}
