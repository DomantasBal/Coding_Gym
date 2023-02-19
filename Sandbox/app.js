const img = document.querySelector("#gallery");
const nextBtn = document.querySelector("#next");


const photos = ["1.jpg","2.jpg","3.jpg"];

let counter = 0;

nextBtn.addEventListener("click", () => {
    counter = (counter + 1) % photos.length;
    img.style.background = "url" + "(" + photos[counter] + ")";
    img.style.objectFit = "contain";
    img.style.backgroundSize = "cover";
})