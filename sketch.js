const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
//var bird1;
var log1, log2, log3, log4;
var pig1, pig2;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,450,50,50);
    box2 = new Box(900,450,50,50);
    box3 = new Box(700,310,50,50);
    box4 = new Box(900,310,50,50);
    box5 = new Box(800,210,50,50);

    ground = new Ground(500,height,1000,20);
    
    //bird1 = new Bird(0, 0);
    
    log1 = new Log(800, 400, 300, PI/2);
    log2 = new Log(800, 260, 300, PI/2);
    log3 = new Log(750, 200, 100, PI/7);
    log4 = new Log(850, 200, 100, -PI/7)

    pig1 = new Pig(800, 450);
    pig2 = new Pig(800, 360);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    //bird1.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();
}