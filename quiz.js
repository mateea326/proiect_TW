function checkQuiz() {
    let fe = document.getElementById("quiz").elements;
    let q1 = fe[0].elements;
    let q2 = fe[4].elements;
    let q3 = fe[8].elements;
    let q4 = fe[12].elements;
    let q5 = fe[16].elements;
    let x = 0;
    for (let i = 0; i < q1.length; i++)
        if (q1[i].checked)
            x = x + parseInt(q1[i].value);

    for (let i = 0; i < q2.length; i++)
        if (q2[i].checked)
            x = x + parseInt(q2[i].value);

    for (let i = 0; i < q3.length; i++)
        if (q3[i].checked)
            x = x + parseInt(q3[i].value);

    for (let i = 0; i < q4.length; i++)
        if (q4[i].checked)
            x = x + parseInt(q4[i].value);

    for (let i = 0; i < q5.length; i++)
        if (q5[i].checked)
            x = x + parseInt(q5[i].value);
    alert(`You scored ${x}/5!`);
}

const colorNames = {
    'rgb(255, 240, 245)': 'lavenderblush',
    'rgb(250, 240, 230)': 'linen',
    'rgb(230, 230, 250)': 'lavender',
    'rgb(255, 228, 225)': 'mistyrose'
  };
  
  function getColorName(color) {
    return colorNames[color];
  }
  
  function changeColor() {
    const colors = Object.keys(colorNames);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('h1').style.color = randomColor;
    document.querySelector('button').style.background = randomColor;
    document.querySelector('footer').style.color = randomColor;
    document.querySelector('li a').style.color = randomColor;
  
    const colorDisplay = document.querySelector('#color-display');
    colorDisplay.textContent = `New color: ${getColorName(randomColor)}`;
  }
  
  const button = document.getElementById("color-button");
  button.addEventListener("click", changeColor);
  button.addEventListener('click', function (event) {
    event.stopPropagation();
  });