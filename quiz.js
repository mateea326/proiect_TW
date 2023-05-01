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

function changeColor() {
    const colors = ["thistle", "white", "lavender"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('h1').style.color = randomColor;
}
const button = document.getElementById("color-button");
button.addEventListener("click", changeColor);