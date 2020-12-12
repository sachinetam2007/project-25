
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var block1,block2,block3



function setup() {
	createCanvas(1600, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(800,670,1600,10);
    paper=new Paper(30,280);
    
    dustbin=new Dustbin(1200,650)
    
	Engine.run(engine);
  keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ground1.display();
  
 dustbin.display();
 paper.display();
 
  
 
}

function keyPressed() {
 if (keyCode===UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:230,y:-230})
 }
  
 
 }


