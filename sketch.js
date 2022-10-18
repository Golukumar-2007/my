var op1,op2,op3,plane,m,blast;
var op1Image,op2Image,op3Image,plane1Image,mImage,blastImage;
var op1group,mgroup,op2group,op3group;
var score = 0;
var life = 100;
var gameState = 1

function preload() {
  op1Image = loadImage("op1.png")
  op2Image = loadImage("op2.png")
  op3Image = loadImage("op3.png")
  planeImage = loadImage("plane.png")
  mImage = loadImage("m.png")
  blastImage = loadImage("blast.png")
}
 

function setup() {
  createCanvas(1400,600)

op1group = new Group ()
mgroup = new Group ()
op2group = new Group ()
op3group = new Group ()

op1 = createSprite(1000,random(20,500),40,40)
op1.addImage("op1",op1Image)
op1.scale = 0.5
//op1.life = 150
//op1.velocityX= -10
op1.setCollider("rectangle",0,-30,400,200)
op1.debug = true

op2 = createSprite(1100,random(20,500),40,40)
op2.addImage("op2",op2Image)
op2.scale = 0.5
//op2.velocityX= -7
//op2.life = 200
op2.setCollider("rectangle",0,0,400,140)
op2.debug = true


plane = createSprite(100,random(20,400),40,40)
plane.addImage("plane",planeImage)
plane.scale=0.5



op3 = createSprite(900,random(100,300),40,40)
op3.addImage("op3",op3Image)
op3.scale = 0.5
//op3.velocityX=-8
//op3.life = 190
op3.setCollider("rectangle",0,10 ,400,150)
op3.debug = true

op1group.add(op1)
op2group.add(op2)
op3group.add(op3)

}

function draw() {
background("blue")

if (keyWentUp("space")){
  missile()
}
  
  plane.y=mouseY

 // spawnOp();

  if (mgroup.collide(op1group)){
    op1.destroy();
    mgroup.destroyEach();
    blastscn();
  }

  if (mgroup.collide(op2group)){
    op2.destroy();
    mgroup.destroyEach();
    blastscn();
  }

  if (mgroup.collide(op3group)){
    op3.destroy();
    mgroup.destroyEach();
    blastscn();
  }

drawSprites();
}

function missile(){
  m = createSprite(150,100,40,40)
  m.addImage("m",mImage)
  m.y = plane.y+75
  m.scale=0.1
  m.velocityX= 10
  mgroup.add(m)
}

function blastscn(){
 blast = createSprite (m.x,m.y,40,40)
  blast.addImage("blast",blastImage)
  blast.scale= 0.2
  blast.life = 20
  mgroup.destroyEach();
  op1.remove();
}
/*(function spawnOp(){
  if (frameCount % 200===0){
  var op = createSprite (1200,random(20,500),40,40)
  op.velocityX = -10

  var rand = Math.round(random(1,3))
  switch (rand){
case 1: op.addImage(op1)
          break;
case 2: op.addImage(op2)
        break;
case 3: op.addImage(op3) 
        break
        default :break;
   }
   op.scale = 0.5
   op.life = 200
   opsGroup.add (op)
  }
}*/













































