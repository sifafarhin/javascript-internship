// Assignment 2: Operators, Expressions, and Input Handling

const billInput = prompt("Enter the bill amount:");

const tipInput = prompt("Enter the tip percentage:");


// Convert input from strings to numbers

const bill = Number(billInput);

const tipPercentage = Number(tipInput);


// Validate the input

if (
    billInput === null ||
    tipInput === null ||
    billInput.trim() === "" ||
    tipInput.trim() === "" ||
    !Number.isFinite(bill) ||
    !Number.isFinite(tipPercentage) ||
    bill < 0 ||
    tipPercentage < 0
) {

    console.log("Please enter valid, non-negative numbers.");

} else {

    // Calculate the tip

    const tip = bill * tipPercentage / 100;

    // Calculate the total

    const total = bill + tip;


    // Display the results

    console.log(`Subtotal: $${bill}`);

    console.log(`Tip Percentage: ${tipPercentage}%`);

    console.log(`Calculated Tip: $${tip}`);

    console.log(`Total Amount to Pay: $${total}`);
}