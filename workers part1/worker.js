self.onmessage = function (event) {
  console.log("Recieved :" + event.data);
  self.postMessage(event.data.split("").reverse().join(""));
};
