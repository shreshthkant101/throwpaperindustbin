const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(1280,606);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1600,20);
    
    bin = new DustBin(800,398,200,200);
    
    p1 = new Paper(300,300);
    

    
    holder1 = new Ground2(900,595,160,10);
    holder2 = new Ground2(808,500,10,160);
    holder3 = new Ground2(990,500,10,160);
}

function draw(){
    background(0);
    stroke(-10)
    Engine.update(engine);
    
    ground.display();
    
    bin.display();
    
    p1.display();
    holder1.display();
    holder2.display();
    holder3.display();
    if (keyIsDown(UP_ARROW)) { 
        p1.move();
    } if (keyIsDown(RIGHT_ARROW)) { 
        p1.move2();
    } 
    if (keyIsDown(LEFT_ARROW)) { 
        p1.move3();
    } 
    if (keyIsDown(DOWN_ARROW)) { 
        p1.move4();
    } 
}

