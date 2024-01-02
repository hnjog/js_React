const images = [
    "n1.png",
    "n2.png",
    "n3.png",
    "n4.png",
    "n5.png",
]

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

// body에 추가하기
document.body.appendChild(bgImage);