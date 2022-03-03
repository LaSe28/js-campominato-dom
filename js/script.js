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
    bombList = []
    points = []
    grid.innerHTML=''
    text.classList.add('hidden')
    switch (difficulty.value){
        case 'hard':
            boxesNum = 49;
            max = 49
            boxesSize = 7
            winPoints = 33
            break;
        case 'medium':
            boxesNum = 81
            max = 81
            boxesSize = 9
            winPoints = 65
            break;
        case 'easy':
            boxesNum = 100
            max = 100
            boxesSize = 10
            winPoints = 84
    }
    console.log(boxesNum)
    for ( let m = 1; m <= boxesNum; m++){
      
        sum += m
        let square = document.createElement(`div`);
        square.classList.add('box')
        square.addEventListener('click', changeColor)
        square.style.height = `calc(100% / ${boxesSize})`
        square.style.width = `calc(100% / ${boxesSize})`
        square.innerHTML= m
        square.addEventListener('click', function(){
            points.push(m)
        })
       
        grid.append(square)
        i = 0
        while (bombList.length < 16){
            let num = generateRandomNum(1, max)
            if(!bombList.includes(num)){
                bombList.push(num)
            }
            i++
            console.log(bombList)
        }
        for (n = 0 ; n < 16; n++){
            if(bombList[n]== m){
                    square.addEventListener('click', bombColor)
            }
        }
        
    }   
    console.log(winPoints)
    console.log(points)
});
function changeColor(){
    this.classList.add('active')
}
function bombColor(){
    this.classList.add('bomb')
}

function generateRandomNum(min, max) {
    let randomNumber = Math.floor(Math.random()*(max - min + 1) +1 )
    return randomNumber
}










