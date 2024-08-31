
  





document.addEventListener("DOMContentLoaded", function() {
let input = document.querySelector('.input');
let output = document.querySelector('#output');
let searchButton = document.querySelector('#SearchButton'); 


function displayNykaa() {
  fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      output.innerHTML = ''; // Clear previous output

      const searchQuery = input.value.toLowerCase();

      const filteredData = data.filter(product => {
        return product.name.toLowerCase().includes(searchQuery);
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
      });}
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      output.textContent = 'An error occurred while fetching the data.';
    });
}

displayNykaa();

searchButton.addEventListener('click', function() {
  const searchQuery = input.value;
  displayNykaa(searchQuery);
});

});




// const input = document.querySelector('.input');
//         const searchButton = document.querySelector('#SearchButton');
//         const output = document.querySelector('#output');

//         function displayProducts(query) {
//             fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${query}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(data);
//                     output.innerHTML = ''; // Clear previous output

//                     data.forEach(product => {
//                         const productImage = document.createElement('img');
//                         productImage.src = product.image_link;
//                         productImage.alt = product.name;
//                         productImage.style.width = '100px'; // You can adjust the size as needed

//                         const productDiv = document.createElement('div');
//                         productDiv.classList.add('product');

//                         const productName = document.createElement('h3');
//                         productName.textContent = product.name;

//                         const productBrand = document.createElement('p');
//                         productBrand.textContent = `Brand: ${product.brand}`;

//                         const productPrice = document.createElement('p');
//                         productPrice.textContent = `Price: $${product.price}`;

//                         productDiv.appendChild(productImage);
//                         productDiv.appendChild(productName);
//                         productDiv.appendChild(productBrand);
//                         productDiv.appendChild(productPrice);
//                         output.appendChild(productDiv);
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error fetching data:', error);
//                     output.textContent = 'An error occurred while fetching the data.';
//                 });
//         }

//         searchButton.addEventListener('click', () => {
//             const query = input.value;
//             if (query) {
//                 displayProducts(query);
//             } else {
//                 output.textContent = 'Please enter a search query.';
//             }
//         });