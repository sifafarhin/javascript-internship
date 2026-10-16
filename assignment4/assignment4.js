// Assignment 4: Loop Control Structures


// ============================================
// 1. FOR LOOP
// Print the multiplication table of 5
// from 1 to 10
// ============================================

console.log("Multiplication Table of 5");

for (let i = 1; i <= 10; i++) {

    console.log(`5 x ${i} = ${5 * i}`);

}


// ============================================
// 2. WHILE LOOP
// Find the first number greater than 10
// that is divisible by 6
// ============================================

console.log("First number greater than 10 divisible by 6");

let number = 11;

while (number % 6 !== 0) {

    number++;

}

console.log("Found:", number);


// ============================================
// 3. DO...WHILE LOOP
// Use continue to skip number 3
// ============================================

console.log("Do...while loop");

let count = 0;

do {

    count++;

    if (count === 3) {

        continue;

    }

    console.log("Count:", count);

} while (count < 5);