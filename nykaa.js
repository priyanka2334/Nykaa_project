// First Slider
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let counter = 0;
const imagesToShow = 4;
const gap = 10; // Adjust gap as needed
const size = (100 / imagesToShow) - ((gap / images[0].clientWidth) * 100); // Calculate slide width including gap

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - imagesToShow) return;
    counter++;
    slides.style.transform = `translateX(-${size * counter}%)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    slides.style.transform = `translateX(-${size * counter}%)`;
});

// Second Slider
const slides1 = document.querySelector('.slides1');
const images1 = document.querySelectorAll('.slides1 img');
const prevBtn1 = document.getElementById('prev1');
const nextBtn1 = document.getElementById('next1');

let counter1 = 0;
const size1 = (100 / imagesToShow) - ((gap / images1[0].clientWidth) * 100); // Calculate slide width including gap

nextBtn1.addEventListener('click', () => {
    if (counter1 >= images1.length - imagesToShow) return;
    counter1++;
    slides1.style.transform = `translateX(-${size1 * counter1}%)`;
});

prevBtn1.addEventListener('click', () => {
    if (counter1 <= 0) return;
    counter1--;
    slides1.style.transform = `translateX(-${size1 * counter1}%)`;
});

// Third Slider
const slides2 = document.querySelector('.slides2');
const images2 = document.querySelectorAll('.slides2 img');
const prevBtn2 = document.querySelector("#prev2");
const nextBtn2 = document.querySelector('#next2');

let counter2 = 0;
let imagesToShow1 = 4;
const size2 = (images2[0].clientWidth + gap) * imagesToShow1;

nextBtn2.addEventListener('click', () => {
    if (counter2 >= images2.length - imagesToShow1) return;
    counter2 += imagesToShow1; // Increment by number of images to show
    slides2.style.transition = 'transform 0.6s ease-in-out';
    slides2.style.transform = `translateX(-${size2 * counter2}px)`;
});

prevBtn2.addEventListener('click', () => {
    if (counter2 <= 0) return;
    counter2 -= imagesToShow1; // Decrement by number of images to show
    slides2.style.transition = 'transform 0.6s ease-in-out';
    slides2.style.transform = `translateX(-${size2 * counter2}px)`;
});

// fourth slider



document.addEventListener('DOMContentLoaded', () => {
    let slides3 = document.querySelector('.slides3');
    let boxes = document.querySelectorAll('.slides3 .box');
    let prevBtn3 = document.querySelector("#prev3");
    let nextBtn3 = document.querySelector('#next3');

    let counter3 = 0;
    let imagesToShow = 4; // Number of images to show at once
    let gap = 10; // Adjust this value based on the actual gap between boxes

    // Calculate the width of each box including margin (gap)
    let boxWidth = boxes[0].clientWidth + gap;
    let size3 = boxWidth * imagesToShow;

    nextBtn3.addEventListener('click', () => {
        if (counter3 >= boxes.length - imagesToShow) return;
        counter3 += imagesToShow;
        slides3.style.transition = 'transform 0.6s ease-in-out';
        slides3.style.transform = `translateX(-${boxWidth * counter3}px)`;
    });

    prevBtn3.addEventListener('click', () => {
        if (counter3 <= 0) return;
        counter3 -= imagesToShow;
        slides3.style.transition = 'transform 0.6s ease-in-out';
        slides3.style.transform = `translateX(-${boxWidth * counter3}px)`;
    });
});



