const getProducts = async () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const contenedor = document.getElementById("contenedor");

            data.forEach(product => {
                const card = document.createElement("div");
                card.className = "col-12 col-md-6 col-lg-4 col-xl-3 mb-4";

                card.innerHTML = `
                    <div class="card h-100 shadow">
                        <img src="${product.image}" class="card-img-top img-fluid" style="height: 200px;" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Categoría:</strong> ${product.category}</p>
                            <p class="card-text"><strong>Precio:</strong> $${product.price}</p>
                        </div>
                    </div>
                `;
                contenedor.appendChild(card);
            });
        })
        .catch(error => console.error(error));
};

(() => {
    getProducts();
})();
