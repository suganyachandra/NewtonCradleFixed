
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	bobDiameter=40

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(475,210,60);
	bobObject2= new Bob(535,210,60);
	bobObject3= new Bob(595,210,60);
	bobObject4= new Bob(655,210,60);
	bobObject5= new Bob(715,210,60);

	roofObject= new Roof(600,10,400,25);
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*3,0);
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1.5,0)
	rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*0.08,0);
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1.4,0);
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2.9,0);

	Engine.run(engine)
}


function draw() {
  background(255);
  rectMode(CENTER);
 
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //keyPressed();

//   drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		console.log("key pressed")
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); 
	}

}

