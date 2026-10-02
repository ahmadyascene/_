'use strict';
oninstall=e=>e.waitUntil(caches.open('0')
  .then(c=>c.addAll(['/','/index.html','/w.js','/404.html',
    '/AlegreyaSansSC-Light.woff2','/AlegreyaSansSC-Regular.woff2','/AlegreyaSansSC-Medium.woff2','/AlegreyaSansSC-Bold.woff2','/AlegreyaSansSC-Black.woff2',
    '/fa-regular-400.woff2','/fa-solid-900.woff2',
    '/favicon-48.png','/favicon.ico','/apple-touch-icon.png',
    '/manifest.json','/manifest-192.png','/manifest-192-maskable.png','/manifest-512.png','/manifest-512-maskable.png']))
  .then(skipWaiting));
onactivate=e=>e.waitUntil(caches.keys()
  .then(C=>Promise.all(C.map(c=>{if (c!='0') return caches.delete(c);})))
  .then(()=>clients.claim()));
onfetch=e=>{if (e.request.method!='GET') return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(E=>{
    if (e.request.destination=='document') return caches.match('/404.html');
    throw E;})));};