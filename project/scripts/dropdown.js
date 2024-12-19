const Button = document.getElementById("menu-button");
const Menu = document.getElementById("menu-info");

Button.addEventListener("click", () => {
    Menu.style.display = 
        Menu.style.display == "block" ? "none" : "block";
});