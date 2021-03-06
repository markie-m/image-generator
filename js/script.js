const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () { 
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    // console.log(images);
    selectRandomImage(images);
};

// Below the async function, declare a function expression called selectRandomImage. Use the images as a parameter.
const selectRandomImage = function (images) {
    // In the body of the function, declare a variable called randomIndex. In the value, use the Math.floor() method to round the number down. Inside the Math.floor() method, multiply the Math.random() method by the length of the images: 
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex);
    // Below your randomIndex variable, create a variable called randomImage. In the value, use randomIndex to grab a single image from your images array.
    const randomImage = images[randomIndex];
    // console.log(randomImage);
    displayImage(randomImage);
};

// This function accepts the random image object, which contains all the properties listed above.
const displayImage = function (randomImage) {
    // Inside the body of the function, declare a variable called author. In the value, access the author property from the randomImage object. 
    const author = randomImage.author;
    // On the next line, declare a variable called imageAddress. In the value, access the download_url property from the randomImage object. 
    const imageAddress = randomImage.download_url;
    // Modify the DOM elements declared at the top of the file using information captured from the random image. 
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", function() {
    getImage();
});