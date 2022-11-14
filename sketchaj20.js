const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ball_options2 = {
    restitution : 1.0,
    frictionAir : 0.01,
    
  }

  var ball_options3 = {
    restitution : 2.0,
    frictionAir : 0.01
  }

  var ball_options4 = {
    restitution : 2.0,
    frictionAir : 0.01,
    density : 5.0
  }


  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(150,10,20,ball_options2);
  World.add(world,ball2);

  ball3 = Bodies.circle(200,10,40,ball_options3);
  World.add(world,ball3);

  ball4 = Bodies.circle(300,10,40,ball_options4);
  World.add(world,ball4);


  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 fill("red")
 rect(ground.position.x,ground.position.y,400,20);
 
 fill("white")
 ellipse(ball2.position.x,ball2.position.y,30);

 fill("white")
 ellipse(ball3.position.x,ball3.position.y,30);

 fill("blue")
 ellipse(ball4.position.x,ball4.position.y,30);



}

