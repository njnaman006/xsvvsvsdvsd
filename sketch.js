var canvas; 
var music; 
var surface1,surface2,surface3,surface4; 
var ball; 

function preload(){
   music = loadSound("music.mp3");
   } 

   function setup(){
      canvas = createCanvas(1400,700); 
      //create 4 different surfaces
      surface1=createSprite(1200,90,10,100);
      surface1.shapeColor="green";
      surface2=createSprite(1200,250,10,120);
      surface2.shapeColor="red";
      surface3=createSprite(1200,380,10,90);
      surface3.shapeColor="cyan";
     surface4=createSprite(1200,500,10,100);
     surface4.shapeColor="pink";
     ball=createSprite(200,random(20,750),50,50);
    ball.shapeColor="white" 
      ball.velocityX=10; 
            //create box sprite and give velocity
    } 
    function draw() {
    background("black"); 
    //create edge Sprite
    if(ball.isTouching(surface1)&& ball.bounceOff(surface1)){
    ball.shapeColor="green"; 
    }
    if(ball.isTouching(surface2)&& ball.bounceOff(surface2)){
     ball.shapeColor="red"; 
      }
      if(ball.isTouching(surface3)&& ball.bounceOff(surface3)){
      ball.shapeColor="cyan"; 
        }
        if(ball.isTouching(surface4)&& ball.bounceOff(surface4)){
          ball.shapeColor="pink"; 
          }
    //add condition to check if box touching surface and make it box
    drawSprites(); 
    }