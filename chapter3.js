// bindings and scope
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x+y+z);
}

// y is not visible here
console.log(x+z);

const halve = function(n) {
    return n/2;
}

let n = 10;
console.log(halve(100));
console.log(n);

// nested scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1 ) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
var myHummus = hummus(3);

// functions as values
console.log("funtions as values");
let launchMissles = function() {
    missleSystem.launch("now");
}
if (true) {
    launchMissles = function() { /* do nothing */};
}
// arrow functions
console.log("arrow functions");
const power = (base, exponent) => {
    let result = 1;
    for (let count=0; count<exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(3,2));

// optional arguments
console.log("optional arguemnts");
function square(x) { return (x*x);}
console.log(square(3, true, "extra junk"))

// closure
console.log("closure");
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// recursion
console.log("recursion");
function powerR(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * powerR(base,exponent-1)
    }
}
console.log(powerR(2,9));

//
