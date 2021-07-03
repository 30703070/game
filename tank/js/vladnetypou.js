var ram = document.getElementById('ram');
var ctx = ram.getContext('2d');
var fot = new Image();
fot.src = "img/tank.png";
var apple = new Image();
apple.src =  "img/apple.png";
var box = 20;
var w = "";
var hp = 100;
var hpp = 16 ;
var stena = new Image();
stena.src = "img/apple.png";
var stenna = {
     x:Math.floor((Math.random() * 40)) * box,
     y:Math.floor((Math.random() * 40)) * box
}

var tank = {
     x: 400,
     y: 400
}
document.addEventListener('keydown', upr);
var p = "";
function upr (event) {
if(event.keyCode == 37  ){
p = "Left" ;
fot.src = "img/tankL.png";
}
else if(event.keyCode == 38){
p = "Up";
fot.src = "img/tank.png";
}
else if (event.keyCode == 39){
p = "Right";
fot.src = "img/tankR.png";
}
else if (event.keyCode == 40){
p = "Down";
fot.src = "img/tankD.png";
}
else if (event.keyCode == 16)
p = "";
else  if( event.keyCode == 32)
w = "boom" 

//console.log(p );
}
function game(){
     ctx.fillStyle ="#2e2e2e";
     ctx.fillRect(0,0,800,800);
     ctx.drawImage (stena, stenna.x , stenna.y );
     ctx.drawImage (fot, tank.x , tank.y );
     if( hp < 1 ){
          stenna.x = Math.floor((Math.random() * 40)) * box,
          stenna.y = Math.floor((Math.random() * 40)) * box 
          hp = 100;
          hpp = 16; 
     }
     if(hp < 102 ){
          ctx.fillStyle = "red";
          ctx.fillRect(stenna.x + 2,stenna.y - 10,hpp,5);


     }
     if ( stenna.x == tank.x &&  stenna.y == tank.y){

          stenna.x = Math.floor((Math.random() * 40)) * box,
          stenna.y = Math.floor((Math.random() * 40)) * box
     }
     if( stenna.x == pul && stenna.y == puly){
          stenna.x = Math.floor((Math.random() * 40)) * box,
          stenna.y = Math.floor((Math.random() * 40)) * box
     }
     if ( p == "Left"  ) tank.x -=  20;
     if ( p == "Right"  )tank.x += box;
     if ( p == "Up"  ) tank.y -= box;
     if ( p == "Down"  ) tank.y += box;
     var pul = tank.x;
     var puly = tank.y;
     
      if (tank.x > 770){
          
     } if (tank.x < 20){
     
          
         }
         if (tank.y > 770){
          
         }
         if (tank.y < 20){
          
         }
     if (w == "boom" && p == "Right"  ){ 
          for(pul; pul < 800; pul++  ){
              
               if( stenna.x == pul && stenna.y == puly ){
                    hp -=25
                    hpp -=4
                    console.log( hp);
               }
             // ctx.drawImage(apple, pul ,puly );
             ctx.fillStyle = " red";
             ctx.fillRect(pul,puly + 9,2,2);
               if( pul == 799 ){
               w = "";
               }
          }
     }
         else if (w == "boom" && p == "Left"  ){
               for(pul; pul > 0 ; pul --){
                   
                    if( stenna.x == pul && stenna.y == puly ){
                         hp -=25
                         hpp -=4
                         console.log( hp);
                         }
                    //ctx.drawImage(apple, pul ,puly ); 
                    ctx.fillStyle = " red";
                    ctx.fillRect(pul + 18,puly + 9,2,2);
                    if(pul == 1 ){
                         w = "";
                    }
               }
          }
          else if (w == "boom" && p == "Up"){
               for(puly ; puly > 0 ; puly--){
                    
                    if( stenna.x == pul && stenna.y == puly ){
                         hp -=25
                         hpp -=4
                         console.log( hp);
                         }
                   // ctx.drawImage(apple, pul ,puly );
                   ctx.fillStyle = " red";
                   ctx.fillRect(pul + 9 ,puly + 17 ,2,2);
                    if(puly == 1){
                         w = "";
                    }
               }
               
          }
          else if (w == "boom" && p == "Down"){
               for(puly ; puly < 800 ; puly++){
                    
                    if( stenna.x == pul && stenna.y == puly ){
                         hp -=25
                         hpp -=4
                         console.log(hp);
                         }
                   // ctx.drawImage(apple, pul ,puly );
                   ctx.fillStyle = " red";
                   ctx.fillRect(pul + 9,puly ,2,2);
                    if(puly == 799){
                         w = "";
                    }
               }
          }
         
}
var set = setInterval(game,100);