
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rotator1, rotator2, rotator3;
var particle1, particle2, particle3, particle4, particle5
var block1, block2, plane
var engine, world
var angle1 = 60, angle2 = 60, angle3 = 60

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var plane_options = {
        isStatic: true
	};

	var rotator_options = {
		isStatic: true
	}

	var particle_options = {
		restitution: 0.4,
		friction: 0.02
	}

	
	//Crie os Corpos aqui.
    
	plane = Bodies.rectangle(400, 700, 900, 10, plane_options);
	World.add(world, plane);


	rotator1 = Bodies.rectangle(400, 300, 20, 70, rotator_options);
	World.add(world, rotator1);

	rotator2 = Bodies.rectangle(400, 300, 70, 20, rotator_options);
	World.add(world, rotator2);
   
	rotator3 = Bodies.rectangle(400, 300, 70, 20, rotator_options);
	World.add(world, rotator3);

	block1 = Bodies.rectangle(250, 500, 140, 40, plane_options);
	World.add(world, block1);
	
	block2 = Bodies.rectangle(550, 500, 140, 40, plane_options);
	World.add(world, block2);
	
	particle1 = Bodies.circle(400,10,10,particle_options);
	World.add(world, particle1);

	particle2 = Bodies.circle(400,10,10,particle_options);
	World.add(world, particle2);

	particle3 = Bodies.circle(400,10,10,particle_options);
	World.add(world, particle3);

	particle4 = Bodies.circle(400,10,10,particle_options);
	World.add(world, particle4);

	particle5 = Bodies.circle(400,10,10,particle_options);
	World.add(world, particle5);
	


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  rect(plane.position.x, plane.position.y, 900, 10);
  rect(block1.position.x, block1.position.y, 140, 40);
  rect(block2.position.x, block2.position.y, 140, 40);

  ellipse(particle1.position.x, particle1.position.y, 10);
  ellipse(particle2.position.x, particle2.position.y, 10);
  ellipse(particle3.position.x, particle3.position.y, 10);
  ellipse(particle4.position.x, particle4.position.y, 10);
  ellipse(particle5.position.x, particle5.position.y, 10);

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 += 24;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 += 19;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 += 12;



 
}



