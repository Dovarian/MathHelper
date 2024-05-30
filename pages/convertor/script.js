for(el of document.querySelectorAll(".lower")){
    el.addEventListener("input", (e) => {
        e.target.value = e.target.value < 2 ? e.target.value = "2" : e.target.value > 36 ? "36" : e.target.value;
    })
}
for(el of document.querySelectorAll("input")){
    el.addEventListener("input", () => {
        let value = parseInt(document.querySelector("#value").value.split(" ").join(""), Number(document.querySelectorAll(".lower")[0].value))
        if (Number.isNaN(document.querySelector("#answer").value)) {
            document.querySelector("#answer").value = "Error"
        }
        else{
            document.querySelector("#answer").value = value.toString(document.querySelectorAll(".lower")[1].value)
        }
        document.querySelector("#value").value = decoration(document.querySelector("#value").value.split(" ").join(""))
        document.querySelector("#answer").value = decoration(document.querySelector("#answer").value.split(" ").join(""))
    })
}
for(el of document.querySelectorAll("input[type=text]")){
    el.addEventListener("input", () => {
        document.querySelector("#value").value = decoration(document.querySelector("#value").value.split(" ").join(""))
        document.querySelector("#answer").value = decoration(document.querySelector("#answer").value.split(" ").join(""))
    })
}

const point = (part) => {
    console.log("---------------------------");
    if (part == "distant" || part == "square" || part == "volume") {
        const points = {
            мм: 1,
            см: 10,
            м: 1000,
            км: 1000000,
        }
        let lPoint = 0;
        let rPoint = 0;
        if (document.querySelectorAll(`.select${part}`)[0].value.split("").filter((el) => el == 2 || el == 3) != "") {
            let lDegree = document.querySelectorAll(`.select${part}`)[0].value.split("").filter((el) => el == 2 || el == 3);
            lPoint = points[document.querySelectorAll(`.select${part}`)[0].value.slice(0, -2)] ** lDegree * document.querySelectorAll(`.${part}`)[0].value
        }
        else{
            lPoint = points[document.querySelectorAll(`.select${part}`)[0].value] * document.querySelectorAll(`.${part}`)[0].value
        }
        if (document.querySelectorAll(`.select${part}`)[1].value.split("").filter((el) => el == 2 || el == 3) != "") {
            let rDegree = document.querySelectorAll(`.select${part}`)[1].value.split("").filter((el) => el == 2 || el == 3);
            rPoint = points[document.querySelectorAll(`.select${part}`)[1].value.slice(0, -2)] ** rDegree
        }
        else{
            rPoint = points[document.querySelectorAll(`.select${part}`)[1].value]
        }
        document.querySelectorAll(`.${part}`)[1].value = lPoint / rPoint
    }
    else if (part == "weight"){
        const points = {
            г: 1,
            кг: 1000,
            ц: 100000,
            т: 1000000,
        }
        console.log((points[document.querySelectorAll(".selectweight")[0].value] * document.querySelectorAll(".weight")[0].value) / points[document.querySelectorAll(".selectweight")[1].value]);
        document.querySelectorAll(".weight")[1].value = decoration(String((points[document.querySelectorAll(".selectweight")[0].value] * document.querySelectorAll(".weight")[0].value) / points[document.querySelectorAll(".selectweight")[1].value]))
    }
}
for(el of document.querySelectorAll(".p input")){
    el.addEventListener("input", (el) => point(el.target.name))
}
for(el of document.querySelectorAll(".p select")){
    el.addEventListener("change", (el) => point(el.target.name))
}