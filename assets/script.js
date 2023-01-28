let open_menu = document.querySelector("#open_menu");
let close_menu = document.querySelector("#close_menu");
let links = document.querySelector(".links");

// Open Menu Function
open_menu.addEventListener("click", () => {
  links.style.left = "0";
});

// Close Menu Fanction
close_menu.addEventListener("click", () => {
  links.style.left = "-100%";
});
