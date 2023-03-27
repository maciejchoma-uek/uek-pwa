const cacheName = "uek-pwa";
const githubPagesPath = "/uek-pwa";
const staticAssets = [
  `${githubPagesPath}/`,
  `${githubPagesPath}/index.html`,
  `${githubPagesPath}/scripts/map.js`,
  `${githubPagesPath}/map.html`,
  `${githubPagesPath}/manifest.json`,
  `${githubPagesPath}/icon-192.png`,
  `${githubPagesPath}/icon-512.png`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(staticAssets))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
