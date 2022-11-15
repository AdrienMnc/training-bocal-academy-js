const worker = new SharedWorker("worker.js");

worker.port.onmessage = function (e) {
  const result = e.data;
  document.querySelector("#result").innerText = result;
};

document.querySelector("#submit").addEventListener("click", () => {
  const number1 = document.querySelector("#numberOne").value;
  const number2 = document.querySelector("#numberTwo").value;

  worker.port.postMessage([number1, number2]);
});
