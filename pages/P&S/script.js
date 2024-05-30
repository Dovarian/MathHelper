const calcCircle = () => {
    let value = Number(document.querySelector('#circleValue').value);
    if (document.querySelector('#r').checked) {
        if (document.querySelector('#PCi').checked) {
            document.querySelector("#answerCircle").innerHTML = (value * 3.1415926535 * 2).toFixed(2);
        }
        else{
            document.querySelector("#answerCircle").innerHTML = (value ** 2 * 3.1415926535).toFixed(2);
        }
        document.querySelector("#circle").style.padding = value <= 150 ? Number(value) / 10 + "vh": "15vh" 
        document.querySelector('#circleValue').placeholder = "Радиус"
    }
    else{
        if (document.querySelector('#PCi').checked) {
            document.querySelector("#answerCircle").innerHTML = (value * 3.1415926535).toFixed(2);
        }
        else{
            document.querySelector("#answerCircle").innerHTML = (value ** 2 / 4 * 3.1415926535).toFixed(2);
        }
        document.querySelector("#circle").style.padding = value <= 75 ? Number(value) / 5 + "vh": "15vh" 
        document.querySelector('#circleValue').placeholder = "Диаметр"
    }
}
document.querySelector("#circleValue").addEventListener("input", calcCircle)
for(el of document.querySelectorAll('.elCi')){
    el.addEventListener("click", calcCircle)
}
for(el of document.querySelectorAll('.elCi')){
    el.addEventListener("input", calcCircle)
}
for(el of document.querySelectorAll("input[type='number']")){
    el.addEventListener("input", (e) => {
        e.target.value < 1 ? e.target.value = "1" : true
    })
}

const calcCube = () => {
    let a = Number(document.querySelector('#height').value);
    let b = Number(document.querySelector('#width').value);
    if (document.querySelector("#PCu").checked) {
        document.querySelector("#answerCube").innerHTML = 2 * (a + b);
    }
    else{
        document.querySelector("#answerCube").innerHTML = a * b;
    }
    let ratio = Math.min(150 / a, 150 / b, 1)
    document.querySelector("#cube").style.height = `${(a * ratio) / 3.75}vh`;
    document.querySelector("#cube").style.width = `${(b * ratio) / 3.75}vh`;
}
for(el of document.querySelectorAll('.elCu')){
    el.addEventListener("click", calcCube)
}
for(el of document.querySelectorAll(".cubeValue")){
    el.addEventListener("input", calcCube)
}
