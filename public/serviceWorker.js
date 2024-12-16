const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
  "/Punith1997-Portfolio/",
  // "/Punith1997-Portfolio/src/assets/index.html",
  "/Punith1997-Portfolio/manifest.json",
  "/Punith1997-Portfolio/assets/icons/Cropped_P_192.jpg",
  "/Punith1997-Portfolio/assets/icons/Cropped_P_512.jpg",
];

// Install event: Cache the specified files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event: Serve cached files when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate event: Remove outdated caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
