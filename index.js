const heart = document.querySelector('#heart');

const halo = document.createElement('div');

halo.classList.add('halo');

heart.appendChild(halo);

for (let i = 0; i < 3; i++) {
    const outline = document.createElement('div');
    outline.classList.add('outline');
    heart.appendChild(outline);
}

// Stergem toate outilne-urile existente
const outlines = document.querySelectorAll('.outline');
outlines.forEach((outline) => outline.remove());

// Modificam proprietatile
outlines.forEach((outline) => {
// Schimbam aleator culoarea fiecarui outilne
outline.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

// Schimbam aleator dimensiunile fiecarui outilne
const size = Math.floor(Math.random() * 40) + 10;
outline.style.width = `${size}px`;
outline.style.height = `${size}px`;

// Schimbam aleator pozitia fiecarui outilne
const x = Math.floor(Math.random() * 101);
const y = Math.floor(Math.random() * 101);
outline.style.transform = `translate(${x}%, ${y}%)`;
});