const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function asynReadline(text) {
  return new Promise((resolve, reject) => {
    rl.question(text, (value) => {
      if (value != "" && value.length > 3) {
        resolve(value);
      } else {
        reject("Une erreur s'est produite");
      }
    });
  });
}

(async () => {
  // Renvoyer que l'erreur avec try catch
  try {
    const response1 = await asynReadline("Comment alez vous?");
    const response2 = await asynReadline("New questions here");
    console.log(response1);
    console.log(response2);
  } catch (e) {
    console.log(e);
  }
})();
