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