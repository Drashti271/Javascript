let items = document.querySelectorAll('.slide-item');
let currentIndex = 0;
let next = document.getElementById('next');
let prev = document.getElementById('prev');

function removeActiveClass() {
    items.forEach(item => item.classList.remove('active'));
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % items.length;
    removeActiveClass();
    items[currentIndex].classList.add('active');
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    removeActiveClass();
    items[currentIndex].classList.add('active');
};

setInterval (nextSlide,2000);
