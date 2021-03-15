
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	


	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(400,690,1200,20);
	stone1=new Stone(600,600,100,100);
	iron1=new Iron(250,600,80,40);
	hammer1=new Hammer(300,300,140,40)
	rubber1=new Rubber(900,600,50,50)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink")

  ground1.display();
  stone1.display();
  iron1.display();
  hammer1.display();
  rubber1.display();
  
  drawSprites();
 
}



