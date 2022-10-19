function calcul(a, b, c){
    return (a + b + c) / 3;
}

const result = calcul(20, 45, 89);
console.log(result);

// new version horrible
let newCalc = new Function("a", "b", "c", "return a + b + c");

console.log(newCalc(4, 4, 2));