var bg,bgImg;
var sleep,sleepImg;
var brush,brushImg;
var gym,gymImg;
var gymm,gymmImg;
var eat,eatImg;
var drink,drinkImg;
var move,moveImg;
var bath,bathImg;
var astronaut;

function preload(){
  bgImg=loadImage("iss.png");
sleepImg=loadImage("sleep.png");
brushImg=loadImage("brush.png");
gymImg=loadAnimation("gym1.png","gym2.png")
gymmImg=loadAnimation("gym11.png","gym12.png");
eatImg=loadAnimation("eat1.png","eat2.png");
drinkImg=loadAnimation("drink1.png","drink2.png");
moveImg=loadAnimation("move.png","move1.png");
bathImg=loadAnimation("bath1.png","bath2.png");
}

function setup() {
 createCanvas(800,400);
// bg= createSprite(400, 200);
 //bg.addImage(bgImg);
 //bg.scale=0.2;

astronaut=createSprite(300,230);
astronaut.addImage("sleeping",sleepImg);
astronaut.scale=0.1;

}

function draw() {
  background(bgImg); 

edges=createEdgeSprites();
  astronaut.bounceOff(edges);

 if (keyDown("UP_ARROW")){
   astronaut.addImage("brush",brushImg);
   astronaut.changeImage("brush");
   astronaut.y=300;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
 }

if (keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gym",gymImg);
  astronaut.changeAnimation("gym");
  astronaut.y=300;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if (keyDown("g")){
  astronaut.addAnimation("gymm",gymmImg);
  astronaut.changeAnimation("gymm");
  astronaut.y=300;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
  
if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bath",bathImg);
  astronaut.changeAnimation("bath");
  astronaut.y=300;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if (keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eat",eatImg);
  astronaut.changeAnimation("eat");
  astronaut.y=300;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if (keyDown("m")){
  console.log("hii")
  astronaut.addAnimation("move",moveImg);
  //astronaut.changeAnimation("moveImg");
  //astronaut.y=300;
  astronaut.velocityX=1;
  astronaut.velocityY=1;
}
  drawSprites();

  textSize(25);
  fill("white");
  text("Instructions: ",550,30);
  text("down arrow=gym ex1 ",550,50);
  text("left arrow=bathing ",550,70);
  text("right arrow=eating ",550,90);
  text("up arrow=brushing ",550,110);
  text("letter 'm' =moving",550,130);
  text("letter 'g' =gym ex2",550,150);
}