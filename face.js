
async function fetchProducts() {
  try {
    const response = await fetch('face.json');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    console.log(products)
    return products;
    // console.log(products)
  } catch (error) {
    const nykaaapi = await document.getElementById("searchInput").value;
    console.log("n",nykaaapi)
    console.error('Error fetching products:', error);
    return [];
   

  }
}

// Function to filter products based on type
// async function filterProducts() {
//   const searchTerm = document.getElementById('searchInput').value;
//   console.log(searchTerm)
//   // const products = await fetchProducts();

//   const filteredProducts = products.filter(product =>
//     product.type.toLowerCase().includes(searchTerm)
//   );
//   displayProducts(filteredProducts);
// }

async function filterProducts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const products = await fetchProducts();
  console.log(searchTerm);

  const filteredProducts = products.filter(product =>
    product.type.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
}
// Function to display filtered products
function displayProducts(products) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
      <p><strong>Rating:</strong> ${product.rating} (${product.reviews} reviews)</p>
    `;

    productList.appendChild(productCard);
  });
}

// Display all products initially
fetchProducts().then(products => displayProducts(products));

/////////////////////////////// slider

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const totalSlides = slides.length;
let slideIndex = 0;

// Add event listeners for prev and next buttons
document.getElementById('prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlider();
});

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  const offset = -slideIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}



// Optional: Auto slide
// setInterval(nextSlide, 3000);
























// Function to fetch products from JSON file
// async function fetchProducts() {
//     try {
//       const response = await fetch('face.json');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const products = await response.json();
//       return products;
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return [];
//     }
//   }
  
//   // Function to filter products based on type
//   async function filterProducts() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const products = await fetchProducts();
  
//     const filteredProducts = products.filter(product => product.type.toLowerCase().includes(searchTerm));
//     displayProducts(filteredProducts);
//   }
  
//   // Function to display filtered products
//   function displayProducts(products) {
//     const productList = document.getElementById('productList');
//     productList.innerHTML = '';
  
//     products.forEach(product => {
//       const productCard = document.createElement('div');
//       productCard.classList.add('product-card');
      
//       productCard.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.description}</p>
//         <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//         <p><strong>Rating:</strong> ${product.rating} (${product.reviews} reviews)</p>
//       `;
  
//       productList.appendChild(productCard);
//     });
//   }
  
//   // Display all products initially
//   fetchProducts().then(products => displayProducts(products));
  































// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('navbar').innerHTML = ' ';
//     document.getElementById('sidebar').innerHTML = ' ';

    // const data = [
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/7/2708fec4005808679829_1.jpg',
    //         title: 'NIVEA Soft Light Moisturizer for Face, Hand & Body, Non-Sticky Cream with Vitamin E & Jojoba Oil',
    //         rating: '★★★★',
    //         price: 554,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 19522
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/b/2b13470CLINI00000002_0.jpg',
    //         title: 'Clinique Moisture Surge 100h Auto-replenishing Hydrator (Moisturizer)',
    //         rating: '★★★★★',
    //         price: 865,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 19785
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/8/e813470CLINI00000001_0.jpg',
    //         title: 'Clinique Moisture Surge 100h Auto-replenishing Hydrator (Moisturizer)',
    //         rating: '★★★★',
    //         price: 572,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 22380
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/f/ff0ef5112557_H-8901030786310.jpg',
    //         title: 'Ponds Age Miracle Wrinkle Corrector Day Cream SPF 18 PA++',
    //         rating: '★★★',
    //         price: 843,
    //         numberOfRatings: 4507
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/9/a9eff5c4902430917964.jpg',
    //         title: 'Olay Night Cream: Regenerist Retinol 24 Moisturiser',
    //         rating: '★★★★',
    //         price: 601,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 20048
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/7/773602575534_mini.jpg',
    //         title: 'M.A.C Strobe Cream / Mini Hydratant Lumineux Pinklite',
    //         rating: '★★★★',
    //         price: 513,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 17489
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/9/f993dd7NYCETA0000003_1.jpg',
    //         title: 'Cetaphil DailyAdvance Ultra Hydrating Lotion',
    //         rating: '★★★★',
    //         price: 818,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 19147
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430138796_1_.jpg',
    //         title: 'Olay Regenerist Microsculpting Day Cream - Niacinamide',
    //         rating: '★★',
    //         price: 421,
    //         numberOfRatings: 13113
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/9/1922c2b27234_h-8901030755354.jpg',
    //         title: 'Ponds Super Light Gel Oil Free Moisturiser With Hyaluronic Acid + Vitamin E',
    //         rating: '★★★★',
    //         price: 872,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 19231
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/d/3de7381mcaff00000041_1_new.jpg',
    //         title: 'MCaffeine Oil-Free Coffee Moisturizer with Hyaluronic Acid & Pro Vitamin B5 for Instant Hydration',
    //         rating: '★★★',
    //         price: 344,
    //         numberOfRatings: 17127
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/1/2178c8d8994993016709_1.jpg',
    //         title: "L'Oreal Paris Revitalift Crystal Gel Cream | Oil-Free Face Moisturizer With Salicylic Acid",
    //         rating: '★★★★',
    //         price: 739,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 22370
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/c/8cfe2018906087776536__1_.jpg',
    //         title: 'Mamaearth Ubtan Oil-free Face Moisturizer With Turmeric & Saffron For Skin Brightening',
    //         rating: '★★',
    //         price: 369,
    //         numberOfRatings: 18248
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/5/55fea91NYKAB00000508_1.jpg',
    //         title: 'Nykaa SKINRX Vitamin C Illuminate + Day Moisturizer with SPF 15 for Normal to Dry Skin',
    //         rating: '★★★★',
    //         price: 570,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 24519
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/7/4710032517839.jpeg',
    //         title: 'Neutrogena Hydro Boost Water Gel',
    //         rating: '★★',
    //         price: 643,
    //         numberOfRatings: 1220
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3350900000394_2.jpg',
    //         title: 'Embryolisse Lait-Creme Concentré',
    //         rating: '★★★★',
    //         price: 839,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 28449
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/6/763e29a773602422050_rv__1.jpg',
    //         title: 'M.A.C Strobe Cream',
    //         rating: '★★★',
    //         price: 482,
    //         numberOfRatings: 9547
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/3/d3aa38aNYCETA0000007-new1.jpg',
    //         title: 'Cetaphil Moisturising Lotion',
    //         rating: '★★★★',
    //         price: 405,
    //         bestseller: 'BESTSELLER',
    //         numberOfRatings: 12959
    //     },
    //     {
    //         link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/5/15bd38aNYCETA0000005-new1.jpg',
    //         title: 'Cetaphil Moisturising Cream',
    //         rating: '★★',
    //         price: 324,
    //         numberOfRatings: 13280
    //     }
    // ];

    
//     function displayProducts(products) {
//         const container = document.getElementById('product-container');
//         container.innerHTML = '';

//         products.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.classList.add('product');

//             let productHTML = `
//                 <img src="${product.link}" alt="${product.title}">
//                 <div class="product-details">
//                     <div class="product-title">${product.title}</div>
//                     <div class="product-rating">${product.rating}</div>
//                     <div class="product-price">₹ ${product.price}</div>
//             `;

//             if (product.bestseller) {
//                 productHTML += `<div class="bestseller">${product.bestseller}</div>`;
//             }

//             if (product.numberOfRatings) {
//                 productHTML += `<div class="numberOfRatings">(${product.numberOfRatings} ratings)</div>`;
//             }

//             productHTML += `</div>`; // Close product-details div

//             productCard.innerHTML = productHTML;
//             container.appendChild(productCard);
//         });
//     }

//     displayProducts(data);

//     document.getElementById('l2h').addEventListener('click', function () {
//         const sortedData = [...data].sort((a, b) => a.price - b.price);
//         displayProducts(sortedData);
//     });

//     document.getElementById('h2l').addEventListener('click', function () {
//         const sortedData = [...data].sort((a, b) => b.price - a.price);
//         displayProducts(sortedData);
//     });

//     document.getElementById('search-box').addEventListener('keyup', function (event) {
//         const searchQuery = event.target.value.toLowerCase();
//         const filteredData = data.filter(product => product.title.toLowerCase().includes(searchQuery));
//         displayProducts(filteredData);
//     });
// });
