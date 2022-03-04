let grid = document.querySelector('.griglia')
let btnPlay = document.querySelector('#play')
let text = document.querySelector('.text')
let sum = 0;
let boxesNum;
let boxesSize;
let max;
let bombList = []
let points = []
let winPoints;
let difficulty = document.querySelector('#difficulty');


btnPlay.addEventListener('click', function(){
    pointsAlert.classList.add('hidden')
    let lose = document.querySelector('#lose').classList.add('hidden')
    bombList = []
    points = []
    grid.innerHTML=''
    text.classList.add('hidden')
    switch (difficulty.value){
        case 'hard':
            boxesNum = 49;
            max = 49;
            boxesSize = 7;
            winPoints = 33;
            break;
        case 'medium':
            boxesNum = 81;
            max = 81;
            boxesSize = 9;
            winPoints = 65;
            break;
        case 'easy':
            boxesNum = 100;
            max = 100;
            boxesSize = 10;
            winPoints = 84;
            break;

    }
    console.log(boxesNum)
    for ( let m = 1; m <= boxesNum; m++){
        sum += m
        let square = document.createElement(`div`);
        square.classList.add('box')
        square.addEventListener('click', changeColor)
        
        for (let n = 0 ; n < 16; n++){
            if(bombList[n]== m){
                square.addEventListener('click', bombBoom)
                
            }
        }
        square.style.height = `calc(100% / ${boxesSize})`
        square.style.width = `calc(100% / ${boxesSize})`
        square.innerHTML= m
        
        grid.append(square)
        i = 0
        while (bombList.length < 16){
            let num = generateRandomNum(1, max)
            if(!bombList.includes(num)){
                bombList.push(num)
            }
            i++
        }
        square.addEventListener('click', function(){
            if(!points.includes(m)){
                points.push(m)
            }
            if(points.length==winPoints){
                pointsAlert.innerHTML = `Hai vinto! I tuoi punti: ${points.length}!`
                pointsAlert.classList.remove('hidden')
                let squares = document.querySelectorAll('.box')
                for (let i = 0; i < squares.length; i++){
                    squares[i].removeEventListener('click', changeColor)
                    squares[i].removeEventListener('click', bombBoom)   
                }
            } 
        }) 
    }   
    console.log(winPoints)
    console.log(points)
});    

let pointsAlert = document.querySelector('#points')
function changeColor(){
    this.classList.add('active')
    console.log(points)
}    
function bombBoom(){
    let squares = document.querySelectorAll('.box')
    for (let i = 0; i < squares.length; i++){
        squares[i].removeEventListener('click', changeColor)
        squares[i].removeEventListener('click', bombBoom)
    }
    this.classList.add('bomb-activate')
    let lose = document.querySelector('#lose').classList.remove('hidden')
    pointsAlert.classList.remove('hidden')
    pointsAlert.innerHTML = `I tuoi punti: ${points.length}`
}    
function generateRandomNum(min, max) {
    let randomNumber = Math.floor(Math.random()*(max - min + 1) +1 )
    return randomNumber
}    






