require('./journal.js');

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);

// Object.assign copies all properties from one object to another 
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

// mutability
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);


// last example
let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                   (table[0] + table[1]) *
                   (table[1] + table[3]) * 
                   (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));

function tableFor(event, journal) {
    let table = [0,0,0,0];
    for (let i=0; i<journal.length; i++) {
        let entry = journal[i], index=0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index+= 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL));

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event,JOURNAL)));
}

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event,JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log((event+":", correlation));
    }
}

// narrow in on a correlation
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

// array loops
for (let i=0; i<JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // do soemthing with entry...
}
// array loop - simpler way modern JS
for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
}

// shift & unshift
let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task){
    todoList.unshift(task);
}
remember("change laundry");
remember("takeout trash");
remember("delete porn");
remember("drink beer");
console.log(todoList);
console.log(getTask());
rememberUrgently("urgent task");
console.log(todoList);

// rest parameters
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number>result) result = number;
    }
    return result;
}
console.log(max(4, 7, -12, 13, 9, 8, 4));

// Math
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(1));