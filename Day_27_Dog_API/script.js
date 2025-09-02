let dogImg = document.getElementById("dog-img");
let loader = document.querySelector(".loader");
let loaderSpan = document.querySelector(".loader span");
let url = 'https://dog.ceo/api/breeds/image/random';
let interValid = null;

const fetchDogApi = () => {
    loader.style.display = 'block';
    dogImg.style.display = 'none';
    animation();
    setTimeout( () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                loader.style.display = 'none';    
                dogImg.style.display = 'block';    
                dogImg.src = data.message;
                clearInterval(interValid);
            })
            .catch((error) => {
                console.log(error.message);
            });
    },2000);
};

const animation = () => {
    let dots = 0;
    interValid = setInterval(() => {
        dots = (dots + 1) % 4; 
        loaderSpan.innerHTML = ".".repeat(dots);
    }, 500);
};