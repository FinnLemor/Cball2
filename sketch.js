
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,p,b,l,r;

function preload(){
	dimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,650,1600,20);
	p = new Paper(200,200,60);
	b = new Dustbin(1200,640,200,20);
	l = new Dustbin(1100,600,20,100);
	r = new Dustbin(1300,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
	  ground.display();
	  p.display();
	  //b.display();
	  l.display();
	  r.display();

	  image(dimg,1100,450,200,200)
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p.body,p.body.position,{x:200,y:-200})
	}
}


