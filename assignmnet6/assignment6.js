// Assignment 6: Arrays, Objects, and Core Methods


// ============================================
// PRODUCT ARRAY
// ============================================

const products = [

    {
        name: "Laptop",
        price: 800
    },

    {
        name: "Mouse",
        price: 25
    },

    {
        name: "Keyboard",
        price: 45
    },

    {
        name: "Monitor",
        price: 150
    }

];


// ============================================
// 1. forEach()
// Display every product
// ============================================

console.log("---- All Products ----");

products.forEach((product) => {

    console.log(
        `Item: ${product.name} - Price: $${product.price}`
    );

});


// ============================================
// 2. filter()
// Find products under $50
// ============================================

console.log("---- Products Under $50 ----");

const affordableProducts = products.filter(
    (product) => product.price < 50
);

console.log(affordableProducts);


// ============================================
// 3. map()
// Create product descriptions
// ============================================

console.log("---- Product Descriptions ----");

const productDescriptions = products.map(
    (product) => {

        return `${product.name} costs $${product.price}`;

    }
);

console.log(productDescriptions);


// ============================================
// 4. Display each mapped description
// ============================================

productDescriptions.forEach(
    (description) => {

        console.log(description);

    }
);