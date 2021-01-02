let journal = [];

function addEntry(events, flag) {
    journal.push(events, flag);
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

for (let entry of journal) {
    console.log(entry);
}

let kim = "Kim";
kim.age = 88;
console.log(kim.age); // undefined.

attendance = [
    {
        name: "Garrett",
        present: true
    },
    {
        name: "John",
        present: true
    },
    {
        name: "Daryl",
        present: false
    }
];
console.log((s => s.present)(attendance[0]));  //true
console.log((s => s.present)(attendance[2]));  //false


