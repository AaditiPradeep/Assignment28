const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 var platform;
var bird;

function preload(){
    dustbinImg = loadImage("dustbin.jpg");
}

function setup(){
    var canvas = createCanvas(1200,350);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(600,height,1200,20);
   dustbin = new Dustbin(700,330,100,150);
   ball = new Ball(100,100,50,50);
   launcher = new Launcher(ball.body,{x:150,y:100});
   
   
}

function draw(){
    background(125,125,125);
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    ball.display();
    dustbin.display();
    launcher.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}