
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world
var ball;
var radius=40;
var Ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
 rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,

	}

	 ball = Bodies.circle(150,100,radius/2,ball_options);
	World.add(world,ball);

	Ground = new ground(500,675,1000,10);
	
	leftSide = new ground(680,630,10,100);
	rightSide = new ground(850,630,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //ellipseMode(RADIUS);
  //Engine.update(engine);
  background(0);


  
  ellipse(ball.position.x,ball.position.y,radius,radius);
 Ground.show();
 leftSide.show();
rightSide.show();
keyPressed();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:0.5})
	}
}

