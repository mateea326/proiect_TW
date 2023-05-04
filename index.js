var heart = document.querySelector(".heart");

const halo = document.createElement('div');

halo.classList.add('halo');

heart.appendChild(halo);

const navbar = document.getElementById("myTopnav");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", myFunction);