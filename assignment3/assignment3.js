// Assignment 3: Conditional Logic Implementation


const score = prompt("enter the score");

let grade;


// Determine the grade using if / else if / else

if (score < 0 || score > 100) {

    console.log("Invalid score.");

} else if (score >= 90) {

    grade = "A";

} else if (score >= 80) {

    grade = "B";

} else if (score >= 70) {

    grade = "C";

} else if (score >= 60) {

    grade = "D";

} else {

    grade = "F";
}


// Display the grade

console.log("Score:", score);

console.log("Grade:", grade);


// Use switch to display a message

switch (grade) {

    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    case "D":
        console.log("Needs improvement");
        break;

    case "F":
        console.log("Failing grade");
        break;

    default:
        console.log("Unknown grade");
}


// Ternary operator

const status = score >= 60
    ? "Passed"
    : "Failed";


console.log("Status:", status);