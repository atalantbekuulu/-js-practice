const board= document.querySelector('#board')
const colors =['#e34c4f','#1e49ad','#3456db','e63e12','#2ecc71','aqua','violet']
const squaresNumber = 400

for( let i = 0; i<squaresNumber; i++ ){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave',()=>{
        removeSetColor(square)
    })
    board.append(square)
} 

function setColor(element){
    const color = GetRandomColor()
    element.style.backgroundColor= color
    element.style.boxShadow = `0 0 2px${color}, 0 0 10px ${color}`
}

function setColor(element){
    const color = GetRandomColor()
    element.style.backgroundColor= color
    element.style.boxShadow = `0 0 2px${color}, 0 0 10px ${color}`
}

function removeSetColor(element){
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = " 0 0 2px #000"
}

function GetRandomColor(){
  const index = Math.floor(Math.random() * colors.length)
return colors[index]
}