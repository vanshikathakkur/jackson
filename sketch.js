var ground,groundImg;
var jake,jakeImg;
var lb
var rb

function preload(){
  //pre-load images
groundImg=loadImage("path.png")
jakeImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")



}



function setup(){
  createCanvas(400,400);
  //create sprites here
ground=createSprite(200,200,400,400)
ground.addImage("gd",groundImg);
jake=createSprite(200,300,20,20)
jake.addAnimation("jk",jakeImg);
lb=createSprite(0,200,10,400)
rb=createSprite(400,200,10,400)
lb.visible=false
rb.visible=false

}





function draw() {
  background(0);
ground.velocityY=-1
if (ground.y<0){
  ground.y=ground.height/2
}
jake.x=mouseX
jake.bounceOff(lb)
jake.bounceOff(rb)

drawSprites();
}
