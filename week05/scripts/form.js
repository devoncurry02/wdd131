const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const productMenu = document.getElementById("productChoice");
    if (productMenu) {
        products.forEach(item => {
            const menuOption = document.createElement("option");
            menuOption.value = item.name;
            menuOption.textContent = item.name;
            productMenu.appendChild(menuOption);
        });
    } else {
        console.error("Product menu not found in the DOM.");
    }
});

if (!localStorage.getItem("reviewCount")) {
    localStorage.setItem("reviewCount", 0);
}

if (document.getElementById("reviewCount")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("reviewCount").textContent = reviewCount;
}