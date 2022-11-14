// Ecrire un générateur permettant d’obtenir un tableau d’entier compris entre deux
// nombres passés en arguments.

function* generator(a, b) {
  for (let i = a; i <= b; i++) {
    yield i;
  }
}

const gen = generator(1, 12);

console.log([...gen]);

// Ecrire un générateur permettant d’obtenir les nombre premiers compris entre deux
// nombres passés en argument.

function isPrime(n) {
  if (n % d === 0) {
    return false;
  }
}
