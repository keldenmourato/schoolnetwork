const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
const coverElement = document.querySelector('.fh5co-cover');
let currentIndex = 0;

function changeImage() {
  coverElement.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 5000); // troca de imagem a cada 5 segundos