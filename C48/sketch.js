const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var player1, player2;

function setup() {
  createCanvas(1920,1080);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(960, height, 1920, 20)
  player1 = new Player(300, 100, 50, 200)
  player2 = new Player(1620, 100, 50, 200)
  player2i = createSprite(1620, 100, 50, 200);
}

function draw() {
  background(255,255,255);
  Engine.update(engine) 
  ground.display()
  player1.display()
  player2.display()
  player2.position.x = player2i.x
  player2.position.y = player2i.y
  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    player2i.x = player2i.x + 30
  }


}