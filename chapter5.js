require('./script.js');

// abstracting
function repeat(n, action){
    for (let i=0; i<n; i++) {
        action(i);
    }
}
repeat(3, console.log);

// higher order functions
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);

// control flow example
function unless(test, then) {
    if (!test) then();
}
repeat(3, n=> {
    unless(n%2 == 1, () => {
        console.log(n, "is even");
    });
});

// filtering arrays
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(s => s.direction == "ttb"));

//maps
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));

//reduce
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log("reduce:"+reduce([1,2,3,4], (a,b) => a+b, 0));

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b:a;
}))

// composability
let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null ||
        characterCount(biggest) < characterCount(script)) {
        biggest = script;
    }
}
console.log("composability: "+biggest);