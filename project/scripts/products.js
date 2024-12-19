const products = [
    {image: "images/Cream.jpg", product: "Whipped Tallow", cost: 13.99, scent: "None", type: "Cream", info: "Original Whipped Tallow that will leave your skin moisturized."},
    {image: "images/Cream.jpg", product: "Lavender Whipped Tallow", cost: 14.99, scent: "Lavender", type: "Cream", info: "Lavender Whipped Tallow that will leave your skin moisturized and smelling good."},
    {image: "images/Cream.jpg", product: "Citrus Whipped Tallow", cost: 14.99, scent: "Citrus", type: "Cream", info: "Citrus Whipped Tallow that will leave your skin moisturized and smelling good."},
    {image: "images/Cream.jpg", product: "Vanilla Whipped Tallow", cost: 14.99, scent: "Vanilla", type: "Cream", info: "Vanilla Whipped Tallow that will leave your skin moisturized and smelling good."},
    {image: "images/TallowOil.jpg", product: "Tallow Cooking Oil 12oz", cost: 15.49, scent: "None", type: "Oil", info: "This Cooking Tallow is packed with vital minerals and is anti-inflamitory"},
    {image: "images/TallowOil.jpg", product: "Tallow Cooking Oil 28oz", cost: 24.99, scent: "None", type: "Oil", info: "This Cooking Tallow is packed with vital minerals and is anti-inflamitory"},
    {image: "images/TallowCandle.jpg", product: "Lavender Tallow Candle", cost: 15.99, scent: "Lavender", type: "Candle", info: "Freshen your space with a clean scent from a clean source."},
    {image: "images/TallowCandle.jpg", product: "Citrus Tallow Candle", cost: 15.99, scent: "Citrus", type: "Candle", info: "Freshen your space with a clean scent from a clean source."},
    {image: "images/TallowCandle.jpg", product: "Vanilla Tallow Candle", cost: 15.99, scent: "Vanilla", type: "Candle", info: "Freshen your space with a clean scent from a clean source."},
]

function displayProducts(products) {
    const container = document.getElementById("product-container");
    
    container.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("section");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${product.image}">
            <h2>${product.product}</h2>
            <p>$${product.cost}</p>
            <p>${product.info}</p>
        `;
        container.appendChild(card);
    });
}

function filterProducts(choice) {
    const filteredProducts = [...products].sort((fst, scd) => {
        if (choice == "cost") return fst.cost - scd.cost;
        if (choice == "scent") return fst.scent.localeCompare(scd.scent);
        if (choice == "type") return fst.type.localeCompare(scd.type);
    });
    displayProducts(filteredProducts);
}

displayProducts(products);

document.getElementById("input").addEventListener("click", () => {
    const filterr = document.getElementById("filter").value;
    filterProducts(filterr);
});