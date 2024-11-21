const decoration = (value) => {
let count = Math.floor(value.length / 3)
let answer = ""
if (count == 0) {
    answer = value;
}
else{
    answer += value.slice(0, value.length - count * 3)
    for(let i = 0; i != count; i++){
        answer += " " + value.slice((value.length - count * 3) + 3 * i, ((value.length - count * 3) + 3 * i) + 3)
    }
}
return answer;
}