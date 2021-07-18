const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;

function setup() {
  createCanvas(1600,700);

  engine = Engine.create();
   world = engine.world;
var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2,
}

 ellipseMode(RADIUS);
 rectMode(CENTER);
  
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();



  Engine.update(engine);
}
