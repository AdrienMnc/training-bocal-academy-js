this.addEventListener("install", async () => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll(["/en-travaux.jpg", "/list"]);
      //   return cache.addAll(["/en-travaux2.jpg", "/list"]);
    })
  );
});
