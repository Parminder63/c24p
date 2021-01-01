
var bin1,bin2,bin3;
var paperBall,groundObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
   
    engine = Engine.create();
	world = engine.world;

    

    bin1 = new bin(1165,650,200,20);
    bin2 = new bin(1055,610,20,100);
	bin3 = new bin(1260,610,20,100);
	paperBall = new paper(110,445,30);
	groundObject=new ground(width/2,670,width,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
   //console.log(mouseY);
   //console.log(mouseX);


   bin1.display();
   bin2.display();
   bin3.display();
   paperBall.display();
   groundObject.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:50,y:-50});
	 }
   }