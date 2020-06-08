const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = createSprite(700,320,50,50);
    box2 = createSprite(920,320,50,50);
    pig1 = createSprite(810, 350);
    log1 = createSprite(810,260,300, PI/2);

    box3 = createSprite(700,240,50,50);
    box4 = createSprite(920,240,50,50);
    pig3 = createSprite(810, 220,50,50);

    log3 =  createSprite(810,180,50,50);

    box5 = createSprite(810,160,50,50);
    log4 = createSprite(760,120,50,50);
    log5 = createSprite(870,120,50, 50);

    bird = new Bird(100,100,50,50);

    //log6 = new Log(230,180,80, PI/2);
    slingShot = new Slingshot(bird.body,{x:200,y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
    platform.display();
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingShot.fly();
}

