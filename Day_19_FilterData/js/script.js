const products = [
    {
        image: "./images/c-d-x-PDX_a_82obo-unsplash.jpg",
        title: "Headphone",
        description: "High-quality wireless headphones with noise collection.",
        price: "500"
    },
    {
        image: "./images/domino-studio-164_6wVEHfI-unsplash.jpg",
        title: "Shoes",
        description: "Lightweight and comfortable running shoes with breathable mesh design and cushioned sole.",
        price: "900"
    },
    {
        image: "./images/rachit-tank-2cFZ_FB08UM-unsplash.jpg",
        title: "Watch",
        description: "Elegant analog watch with stainless steel body and water resistance.",
        price: "300"
    }
];

const row = document.querySelector(".row");

function viewProductList(list) {
    row.innerHTML = "";
    list.forEach(product => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-4");
        col.innerHTML = `
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}" height="350px">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price:</strong> ₹${product.price}</p>
                        </div>
                    </div>
                `;
        row.appendChild(col);
    });
}

viewProductList(products);

const search = document.getElementById("search");
search.addEventListener("input", (e) => {
    let searchStr = e.target.value.toLowerCase();
    let data = products.filter(product =>
        product.price.toString().toLowerCase().includes(searchStr) ||
        product.title.toLowerCase().includes(searchStr) || 
        product.description.toLowerCase().includes(searchStr)
    );
    viewProductList(data);
});
