const heart = document.querySelector('#heart');

const halo = document.createElement('div');

halo.classList.add('halo');

heart.appendChild(halo);

const navbar = document.getElementById("myTopnav");
const sticky = navbar.offsetTop;

function myFunction() {
  const contentElement = navbar.nextElementSibling;
  const contentElementStyle = getComputedStyle(contentElement);
  const contentElementMarginTop = parseInt(contentElementStyle.marginTop);
  const navbarHeight = navbar.offsetHeight;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    contentElement.style.marginTop = `${contentElementMarginTop + navbarHeight}px`;
  } else {
    navbar.classList.remove("sticky");
    contentElement.style.marginTop = `${contentElementMarginTop - navbarHeight}px`;
  }
}

