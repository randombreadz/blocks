const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(30, 100);
    iron = new Iron(50, 350);
    log = new Log(70, 300);
    coal = new Coal(80, 400);
    pumpkin = new Pumpkin(70, 450);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    log.display();
    coal.display();
    pumpkin.display();
 
}