let random = document.querySelector(".random")


// rgb(0,0,0) 0-255
function randomColor(){
return `rgb(${parseInt(Math.random()*256)},${parseInt(Math.random()*256)},${parseInt(Math.random()*256)})`
}





setInterval(function(){
    let color = randomColor()
    random.style.color = color
    //console.log(color)
},700)