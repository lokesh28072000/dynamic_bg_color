const button = document.querySelector("button")
const body = document.querySelector("body")
const color = 
[ "red", "blue", "black", "orage", "yellow"]

body.style.backgroundColor = "purple"

button.addEventListener('click', changeColor)

function changeColor(){
    let colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex];

}