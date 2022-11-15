const worker = new Worker("worker.js");

let button = document.getElementById("click-me");

button.addEventListener("click", function (event) {
  event.preventDefault();

  worker.onmessage = function (event) {
    console.log("Recieved :" + event.data);
  };

  worker.postMessage("bonjour");
});
