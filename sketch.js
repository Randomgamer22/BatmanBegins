const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

var drops=[], umbrella;

function preload(){
    
}

function setup(){
    engine = Engine.create();
	world = engine.world;

    createCanvas(400, 800);

    var umbrella = new Umbrella(200, 400);


    Engine.run(engine);
}

function draw(){
    background(0);

    umbrella.display();   
}

