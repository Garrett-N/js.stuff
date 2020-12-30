let result = 1;
let counter = 0;
while (counter<10){
    result *= 2;
    counter += 1;
}
console.log(result);

let number;
for (number=0; number<=12; number++){
    number += 1;
}
console.log(number);

for (let current=20;; current+=1) {
    if (current %7 == 0) {
        console.log(current);
        break;
    }
}

