
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var bin1,bin2,bin3;

function setup() {
	createCanvas(1300,500);
   engine = Engine.create();
   world = engine.world;

	ground = new Ground(650,470,1300,15);

	paper = new Paper(150,425,30,30);
	
	bin3 = new Dustbin(945,452,201,21)
	bin1 = new Dustbin(855,409,21,100);
	bin2 = new Dustbin(1035,409,21,100);

}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();

}
 
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:25,y:-15})
  }
}