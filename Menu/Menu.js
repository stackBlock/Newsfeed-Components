

TweenMax.from(".header", 1.5, {opacity:0, scale:0, ease:Bounce.easeOut});
TweenMax.staggerFrom(".article", 0.5, {opacity:0, y:200, rotatition:180, scale:2, delay:0.5}, 0.2)



const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(`.menu`);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(`.menu-button`);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener(`click`, toggleMenu);
