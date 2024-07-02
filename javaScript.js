document.addEventListener('DOMContentLoaded', () => {
    const mainImageElement = document.getElementById('main-img');
    const imgContainer = document.getElementById('img-container');
    const imgContainer1 = document.getElementById('img-container1');

    const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
    const apiEndpoint = 'https://api.example.com/images';  // Replace with your actual API endpoint

    async function fetchImages() {
        try {
            const response = await fetch(apiEndpoint, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Assuming the API response structure is similar to the simulated response
            const apiResponse = {
                mainImage: data.mainImage,
                thumbnails: data.thumbnails,
                largeImages: data.largeImages
            };

            // Set main image
            mainImageElement.src = apiResponse.mainImage;

            // Add thumbnails to img-container
            apiResponse.thumbnails.forEach(url => {
                const anchor = document.createElement('a');
                anchor.href = "#";
                const img = document.createElement('img');
                img.src = url;
                anchor.appendChild(img);
                imgContainer.appendChild(anchor);
            });

            // Add large images to img-container1
            apiResponse.largeImages.forEach(url => {
                const anchor = document.createElement('a');
                anchor.href = "#";
                const img = document.createElement('img');
                img.src = url;
                anchor.appendChild(img);
                imgContainer1.appendChild(anchor);
            });

        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    fetchImages();
});
