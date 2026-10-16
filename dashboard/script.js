// =========================================
// PRODUCT DATA
// =========================================

let products = [

    {
        id: 1,
        name: "Laptop",
        price: 800,
        category: "Electronics",
        icon: "💻"
    },

    {
        id: 2,
        name: "Wireless Mouse",
        price: 25,
        category: "Accessories",
        icon: "🖱️"
    },

    {
        id: 3,
        name: "Keyboard",
        price: 45,
        category: "Accessories",
        icon: "⌨️"
    },

    {
        id: 4,
        name: "Monitor",
        price: 150,
        category: "Electronics",
        icon: "🖥️"
    },

    {
        id: 5,
        name: "Office Chair",
        price: 200,
        category: "Furniture",
        icon: "🪑"
    },

    {
        id: 6,
        name: "Desk Lamp",
        price: 35,
        category: "Furniture",
        icon: "💡"
    }

];


// =========================================
// GET HTML ELEMENTS
// =========================================

const productList =
    document.getElementById("productList");

const totalProducts =
    document.getElementById("totalProducts");

const totalValue =
    document.getElementById("totalValue");

const totalCategories =
    document.getElementById("totalCategories");

const averagePrice =
    document.getElementById("averagePrice");

const visibleCount =
    document.getElementById("visibleCount");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const productForm =
    document.getElementById("productForm");

const productName =
    document.getElementById("productName");

const productPrice =
    document.getElementById("productPrice");

const productCategory =
    document.getElementById("productCategory");


// =========================================
// DISPLAY PRODUCTS
// =========================================

function displayProducts(productArray) {

    productList.innerHTML = "";


    visibleCount.textContent =
        productArray.length;


    // Empty state

    if (productArray.length === 0) {

        productList.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🔎
                </div>

                <h3>
                    No products found
                </h3>

                <p>
                    Try changing your search or category filter.
                </p>

            </div>

        `;

        return;
    }


    // Create product cards

    productArray.forEach((product, index) => {

        const productCard =
            document.createElement("div");


        productCard.className =
            "product-card";


        productCard.style.animationDelay =
            `${index * 0.06}s`;


        productCard.innerHTML = `

            <div class="product-top">

                <div class="product-image">
                    ${product.icon || "📦"}
                </div>

                <span class="category-badge">
                    ${product.category}
                </span>

            </div>


            <h3>
                ${product.name}
            </h3>


            <div class="product-price">
                $${product.price.toFixed(2)}
            </div>


            <div class="product-footer">

                <span class="product-id">
                    Product #${product.id}
                </span>


                <button
                    class="delete-button"
                    onclick="deleteProduct(${product.id})"
                >
                    🗑 Delete
                </button>

            </div>

        `;


        productList.appendChild(productCard);

    });

}


// =========================================
// UPDATE STATISTICS
// =========================================

function updateStatistics() {

    // Total products

    totalProducts.textContent =
        products.length;


    // Total inventory value

    const inventoryValue =
        products.reduce(
            (total, product) =>
                total + product.price,
            0
        );


    totalValue.textContent =
        `$${inventoryValue.toFixed(2)}`;


    // Categories

    const categories = [
        ...new Set(
            products.map(
                (product) => product.category
            )
        )
    ];


    totalCategories.textContent =
        categories.length;


    // Average price

    const average =
        products.length > 0
            ? inventoryValue / products.length
            : 0;


    averagePrice.textContent =
        `$${average.toFixed(2)}`;

}


// =========================================
// CATEGORY FILTER
// =========================================

function updateCategoryFilter() {

    const currentCategory =
        categoryFilter.value;


    const categories = [
        ...new Set(
            products.map(
                (product) => product.category
            )
        )
    ];


    categoryFilter.innerHTML = `

        <option value="all">
            All Categories
        </option>

    `;


    categories.forEach((category) => {

        const option =
            document.createElement("option");


        option.value =
            category;


        option.textContent =
            category;


        categoryFilter.appendChild(option);

    });


    // Keep selected category

    if (
        categories.includes(currentCategory)
    ) {

        categoryFilter.value =
            currentCategory;

    } else {

        categoryFilter.value =
            "all";

    }

}


// =========================================
// FILTER PRODUCTS
// =========================================

function filterProducts() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedCategory =
        categoryFilter.value;


    const filteredProducts =
        products.filter((product) => {


            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayProducts(filteredProducts);

}


// =========================================
// ADD PRODUCT
// =========================================

productForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            productName.value.trim();


        const price =
            Number(productPrice.value);


        const category =
            productCategory.value.trim();


        // Validate

        if (
            name === "" ||
            category === "" ||
            !Number.isFinite(price) ||
            price < 0
        ) {

            alert(
                "Please enter valid product information."
            );

            return;

        }


        // Choose icon

        let icon = "📦";


        const categoryLower =
            category.toLowerCase();


        if (
            categoryLower.includes(
                "electronic"
            )
        ) {

            icon = "💻";

        } else if (
            categoryLower.includes(
                "access"
            )
        ) {

            icon = "🖱️";

        } else if (
            categoryLower.includes(
                "furniture"
            )
        ) {

            icon = "🪑";

        }


        // Create product

        const newProduct = {

            id: Date.now(),

            name: name,

            price: price,

            category: category,

            icon: icon

        };


        // Add to array

        products.push(newProduct);


        // Clear form

        productForm.reset();


        // Update dashboard

        updateCategoryFilter();

        updateStatistics();

        filterProducts();


        // Scroll to products

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// =========================================
// DELETE PRODUCT
// =========================================

function deleteProduct(id) {

    const product =
        products.find(
            (item) => item.id === id
        );


    if (!product) {

        return;

    }


    const confirmed =
        confirm(
            `Delete "${product.name}"?`
        );


    if (!confirmed) {

        return;

    }


    products =
        products.filter(
            (item) => item.id !== id
        );


    updateCategoryFilter();

    updateStatistics();

    filterProducts();

}


// =========================================
// SEARCH
// =========================================

searchInput.addEventListener(
    "input",
    () => {

        filterProducts();

    }
);


// =========================================
// CATEGORY FILTER
// =========================================

categoryFilter.addEventListener(
    "change",
    () => {

        filterProducts();

    }
);


// =========================================
// INITIALIZE DASHBOARD
// =========================================

updateCategoryFilter();

updateStatistics();

displayProducts(products);