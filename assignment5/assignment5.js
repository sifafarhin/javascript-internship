// Assignment 5: Function Architecture and Scope


// ============================================
// 1. STANDARD FUNCTION
// ============================================

function calculateArea(length, width) {

    return length * width;

}


// Call the function

const area1 = calculateArea(10, 5);

console.log("Area using standard function:", area1);


// ============================================
// 2. DEFAULT PARAMETERS
// ============================================

function calculateRectangleArea(length = 5, width = 4) {

    return length * width;

}


// Calling without arguments uses default values

console.log(
    "Area using default values:",
    calculateRectangleArea()
);


// ============================================
// 3. ARROW FUNCTION
// ============================================

const calculateAreaArrow = (length, width) => {

    return length * width;

};


console.log(
    "Area using arrow function:",
    calculateAreaArrow(8, 6)
);


// ============================================
// 4. BLOCK SCOPE
// ============================================

{

    let blockMessage = "This variable exists inside the block.";

    console.log(blockMessage);

}


// blockMessage cannot be accessed here
// because let has block scope