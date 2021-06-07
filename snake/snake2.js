const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
//const canvas2 = document.getElementById('score');
//const ctx2 = canvas2.getContext('2d');
var sco = document.getElementById('score');
const foodImg = new Image();
foodImg.src = "img/apple.png"

var speed = 100;
let box = 10;
let score = 0;
let food = {
x: Math.floor((Math.random() * 40)) * box * 2,
y: Math.floor((Math.random() * 39)) * box * 2,
};

let food2 = {
     x: Math.floor((Math.random() * 40)) * box * 2,
     y: Math.floor((Math.random() * 39)) * box * 2,
     };

let snake = [];

snake[0] = {
     x: 400,
     y: 400
};
 


document.addEventListener('keydown', direction);
let dir;
function direction(e){
if(e.keyCode == 65 && dir != "right")
     dir = "left";
else if(e.keyCode == 87 && dir != "down")
     dir = "up";
else if(e.keyCode == 68 && dir != "left")
     dir = "right";
else if(e.keyCode == 83 && dir != "up")
     dir = "down";
}

 function eatTail(head,arr){
for(let i = 0 ;i < arr.length; i++){
if(head.x == arr[i].x && head.y == arr[i].y){
     clearInterval(game);
     alert("вы проиграли со счетом " + score);
     location.reload();
}
}

 }
 

   
  document.getElementById('reset').addEventListener('click', reset);
  function reset(){
     location.reload();
  }
  
  
function drawGame(){
   ctx.fillStyle = "#2e2e2e";
     ctx.fillRect(0, 0 ,800 ,780);
   
     ctx.drawImage(foodImg , food.x , food.y);
     ctx.drawImage(foodImg , food2.x , food2.y);
     
     for(let i = 0; i < snake.length; i++) {
          ctx.fillStyle = i == 0 ? "#347331" : "green";
          ctx.fillRect(snake[i].x, snake[i].y, box * 2 - 1, box * 2 - 1);
          
     }
     sco.innerHTML = "⠀score: " + score;
      //ctx2.font = '23px Verdana';  
     //ctx2.fillStyle = 'white';
     //ctx2.fillText("score: ", 1,20);
     //ctx2.fillText(score, 80,20);
       
     let snakeX = snake[0].x;
     let snakeY = snake[0].y;

     if(snakeX == food.x && snakeY == food.y ){
     score++;
     
     food = {
          x: Math.floor((Math.random() * 40)) * box * 2,
          y: Math.floor((Math.random() * 39)) * box * 2 ,
          };
     } else if(snakeX == food2.x && snakeY == food2.y){
          score++;
          food2 = {
               x: Math.floor((Math.random() * 40)) * box * 2,
               y: Math.floor((Math.random() * 39)) * box * 2 ,
               };
     } else {
          snake.pop();
     }
     
     if(snakeX < 0 ){
          snakeX = 800;
    }
    if(snakeX > 800){
         snakeX = -20;
    }
    if(snakeY < 0){
          snakeY = 780;
    }
    if(snakeY > 800){
         snakeY = -20;
    }

     if(dir === "left") snakeX -= box * 2;
     if(dir === "right") snakeX += box * 2;
     if(dir === "up") snakeY -= box * 2;
     if(dir === "down") snakeY += box * 2;

     let newHead = {
          x: snakeX,
          y: snakeY
     };
     eatTail(newHead, snake);
     snake.unshift(newHead);
     
}

let game = setInterval(drawGame, speed);