document.addEventListener("DOMContentLoaded", function() {
    let input = document.querySelector('.input');
    let output = document.querySelector('#output');
    let searchButton = document.querySelector('#searchButton');
    let applyFiltersButton = document.querySelector('#applyFiltersButton');
  
    function getCheckedValues(name) {
      return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
    }
  
    function displayNykaa(searchQuery = '', brands = [], priceRanges = [], categories = []) {
      // fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
      fetch('../face.json')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          output.innerHTML = ''; // Clear previous output
  
          const filteredData = data.filter(product => {
            let matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            let matchesBrand = brands.length ? brands.includes(product.brand) : true;
            let matchesCategory = categories.length ? categories.includes(product.category) : true;
            let matchesPrice = true;
            if (priceRanges.length) {
              matchesPrice = priceRanges.some(range => {
                let [minPrice, maxPrice] = range.split('-').map(Number);
                let productPrice = parseFloat(product.price);
                return productPrice >= minPrice && productPrice <= maxPrice;
              });
            }
            return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
          });
  
          if (filteredData.length === 0) {
            output.textContent = 'No products found.';
          } else {
            filteredData.forEach(product => {
              const productImage = document.createElement('img');
              productImage.src = product.image_link;
              productImage.alt = product.name;
              productImage.style.width = '100px'; // You can adjust the size as needed
  
              const productDiv = document.createElement('div');
              productDiv.classList.add('product');
  
              const productName = document.createElement('h3');
              productName.textContent = product.name;
  
              const productBrand = document.createElement('p');
              productBrand.textContent = `Brand: ${product.brand}`;
  
              const productPrice = document.createElement('p');
              productPrice.textContent = `Price: $${product.price}`;
  
              productDiv.appendChild(productImage);
              productDiv.appendChild(productName);
              productDiv.appendChild(productBrand);
              productDiv.appendChild(productPrice);
              output.appendChild(productDiv);
            });
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          output.textContent = 'An error occurred while fetching the data.';
        });
    }
  
    // Fetch and display all products when the page loads
    displayNykaa();
  
    // Filter and display products based on search input when the search button is clicked
    searchButton.addEventListener('click', function() {
      const searchQuery = input.value;
      const brands = getCheckedValues('brand');
      const priceRanges = getCheckedValues('price');
      const categories = getCheckedValues('category');
      displayNykaa(searchQuery, brands, priceRanges, categories);
    });
  
    // Apply filters when the apply filters button is clicked
    applyFiltersButton.addEventListener('click', function() {
      const searchQuery = input.value;
      const brands = getCheckedValues('brand');
      const priceRanges = getCheckedValues('price');
      const categories = getCheckedValues('category');
      displayNykaa(searchQuery, brands, priceRanges, categories);
    });
  });
  