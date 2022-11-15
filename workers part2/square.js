const worker = new SharedWorker("worker.js");

worker.port.onmessage = function (e) {
  const result = e.data;
  document.querySelector("#result").innerText = result;
};

document.querySelector("#submit").addEventListener("click", () => {
  const number = document.querySelector("#number").value;

  worker.port.postMessage([number, number]);
});
