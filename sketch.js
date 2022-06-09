var bg_img
var lander_img
var lander
var vx=0
var vy=0
var s=0.05

function preload(){
  bg_img = loadImage("bg.png");
  lander_img = loadImage("normal.png");

}

function setup(){
  createCanvas (1000,700);
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.2
}

function draw(){
  background(51);
  image(bg_img,0,0);
  push();
  textSize(20);
  fill("white");
  text("verical velocity:"+ round(vy), 800,75);
  pop();
  vy = vy+s
  lander.position.y+=vy
  drawSprites();
}