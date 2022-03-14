const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

var clientHeight = document.getElementById('nav-links').clientHeight;
// alert(`nav-links height: ${clientHeight}`)

// Create showLinks class dynamically
