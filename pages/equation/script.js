document.querySelector("#btn").addEventListener("click", () => {
let r1, r2;
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value;
let c = document.querySelector("#c").value;
let D = b * b - 4 * a * c;
if (D > 0) {
    document.querySelector("#answer").innerHTML = "";
    document.querySelector("#answer").insertAdjacentHTML("beforeend", `D > 0 <br /> x1 = ${(-b + Math.sqrt(D)) / (2 * a)} <br /> x2 = ${(-b - Math.sqrt(D)) / (2 * a)}`)
}
else if (D == 0) {
    document.querySelector("#answer").innerHTML = "";
    document.querySelector("#answer").insertAdjacentHTML("beforeend", `D = 0 <br /> x = ${-b / (2 * a)}`)
}
else if (D < 0) {
    console.log(`The Roots are Complex and Different `);
    document.querySelector("#answer").innerHTML = "";
    document.querySelector("#answer").insertAdjacentHTML("beforeend", `D < 0 <br /> Корней нет`)
}
else {
        console.error("Error")
}
})