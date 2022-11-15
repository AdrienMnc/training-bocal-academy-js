navigator.serviceWorker
  .register("/worker.js", { scope: "/api" })
  .then(function (registration) {
    this.addEventListener("fetch", function (event) {
      event.respondWith();
    });
  });
