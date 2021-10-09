var spacecraft,spacecraftImg;
var ufo,ufoImg;
var meteroites,meteroitesImg;
var bg,bgImg;
var hit;
var destroy;
var bgsound;
var completed;

function preload(){
  
  spacecraftImg=loadImage("images/pc.png")
  meteroitesImg=loadImage("images/npc2.png")
  ufoImg=loadImage("images/npc1.png")
  bgImg=loadImage("images/background.jpg")

  hit=loadSound("sounds/hit.mp3")
  destroy=loadSound("sounds/destroy.mp3")
  bgsound=loadSound("sounds/bgsound.mp3")
  completed=loadSound("sounds/completed.mp3")

}

function setup() {
  createCanvas(900,800);

bg=createSprite(450,400,900,800);
bg.addImage(bgImg)
bg.scale=2.5;
bg.velocityY=2;


spacecraft=createSprite(450,700,10,10)
spacecraft.addImage(spacecraftImg)
spacecraft.scale=0.9;





}

function draw() {

  if(bg.y>800){

    bg.y=bg.height/2;
  }
  
  if(keyDown("RIGHT_ARROW")){

    spacecraft.x=spacecraft.x+10;

  }
  if(keyDown("LEFT_ARROW")){

    spacecraft.x=spacecraft.x-10;

  }

  bgsound.play();

  ufoObstacle()
  meteroiteObstacle()
  
  drawSprites()
  
}

function ufoObstacle(){

if(frameCount%150===0){

  ufo=createSprite(110,150,10,10)
  ufo.addImage(ufoImg)
  ufo.scale=0.5;
  ufo.velocityX=4;
  ufo.velocityY=3;

}


}

function meteroiteObstacle(){

if(frameCount%340===0){

  meteroites=createSprite(780,300,10,10)
meteroites.addImage(meteroitesImg)
meteroites.scale=0.3;
meteroites.velocityX=-4;
meteroites.velocityY=3;
  
}


}



