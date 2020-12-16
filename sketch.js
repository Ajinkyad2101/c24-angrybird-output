const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,300);
    box2 = new Box(950,300);
    pig1= new Pig (850,300);
    log1= new Log(850,270,300,PI/2);
    box3 = new Box(750,230);
    box4 = new Box(950,230);
    pig2= new Pig (850,230);
    log2= new Log(850,200,300,PI/2);
    box5 = new Box (850,100);
    log3 = new Log (750,100,150,PI/7);
    log4 = new Log (950,100,150,-PI/7);
    bird1 =new Bird(50,50,100,100);

    ground = new Ground(600,400,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
 //   console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();

}