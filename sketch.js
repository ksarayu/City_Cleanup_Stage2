
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
	trashImage = loadImage("images/trash.png"); 
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,690,800,20,ground_options);
    World.add(world,ground);


	crumpledBall1 = new Paper(75,660);
	trashSide1 = new TrashRects(550,635,15,100);
	trashSide2 = new TrashRects(650,635,15,100);
	trashFloor = new TrashRects(600,675,100,15);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	background("white");

	crumpledBall1.display();
	trashSide1.display();
	trashSide2.display();
	trashFloor.display();

	imageMode(CENTER);
	image(trashImage, 600, 605, 125, 150);

	rectMode(CENTER);
	fill("grey")
    rect(ground.position.x,ground.position.y,800,20);
  
  	drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledBall1.body,crumpledBall1.body.position,{x:40,y:-30});
	}
}


