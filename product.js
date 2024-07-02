// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: 'Product 1', price: 100, brand: 'Brand A', discount: 10, image: 'https://via.placeholder.com/150' },
        { name: 'Product 2', price: 200, brand: 'Brand B', discount: 20, image: 'https://via.placeholder.com/150' },
        { name: 'Product 3', price: 150, brand: 'Brand A', discount: 15, image: 'https://via.placeholder.com/150' },
        { name: 'Product 4', price: 250, brand: 'Brand C', discount: 5, image: 'https://via.placeholder.com/150' },
    ];

    const productContainer = document.getElementById('product-list');
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const priceValue = document.getElementById('price-value');
    const sortSelect = document.getElementById('sort');
    const cartContainer = document.getElementById('cart');
    let cart = [];

    // Populate brand filter options
    const brands = [...new Set(products.map(product => product.brand))];
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });

    // Display products
    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>Brand: ${product.brand}</p>
                <p>Discount: ${product.discount}%</p>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productElement.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
            productContainer.appendChild(productElement);
        });
    }

    // Update price filter value
    priceFilter.addEventListener('input', function() {
        priceValue.textContent = `$${priceFilter.value}`;
        filterAndSortProducts();
    });

    // Sort products
    sortSelect.addEventListener('change', filterAndSortProducts);

    // Filter products by brand and price
    brandFilter.addEventListener('change', filterAndSortProducts);

    function filterAndSortProducts() {
        let filteredProducts = products.filter(product => 
            (brandFilter.value === 'all' || product.brand === brandFilter.value) &&
            product.price <= priceFilter.value
        );

        if (sortSelect.value === 'low-to-high') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortSelect.value === 'high-to-low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        displayProducts(filteredProducts);
    }

    // Add to cart
    function addToCart(product) {
        cart.push(product);
        displayCart();
    }

    // Display cart
    function displayCart() {
        cartContainer.innerHTML = '';
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${product.name} - $${product.price}`;
            cartContainer.appendChild(cartItem);
        });
    }

    // Initial display
    displayProducts(products);
    priceValue.textContent = `$${priceFilter.value}`;
});
