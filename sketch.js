var road
var rad
var mc
var mcImage
var op1img, op2img, op3img
var op1, op2, op3
var op1f, op2f, op3f
var opp1g
var opp2g 
var opp3g
var gameState = "play" 

function preload(){
 mcImage = loadAnimation  ("images/mainPlayer1.png", "images/mainPlayer2.png")
 op1img = loadAnimation  ("images/opponent1.png", "images/opponent2.png")
 op2img = loadAnimation  ("images/opponent4.png", "images/opponent5.png")
 op3img = loadAnimation  ("images/opponent7.png", "images/opponent8.png")
 road = loadImage  ("images/Road.png")
op1f = loadAnimation ("images/opponent3.png")
op2f = loadAnimation ("images/opponent6.png")
op3f = loadAnimation ("images/opponent9.png")
}

function setup(){
  
createCanvas(1200,300);
 opp1g = createGroup()
 opp2g = createGroup()
 opp3g = createGroup()
rad = createSprite (600,150,1200,300)
rad.addImage ("road",road)
mc  = createSprite (40,40,150,150)
mc.addAnimation("Main Character",mcImage)
mc.scale = 0.1
}

function draw() {
background("black")
if (gameState == "play")
{
  mc.y = mouseY
  rad.velocityX = -10
  if(rad.x < 25)
  {
    rad.x = 600
  }
  if(frameCount % 50 === 0)
  {
    var m = Math.round(random(1,3))
    switch(m)
    {
  case 1 : opp1()
               break;
  case 2 : opp2()
               break;
  case 3 : opp3()
               break;
    }
    
  }
  if (opp1g.isTouching(mc))
{
op1.velocityX = 0
gameState = "end"
op1.addAnimation("opp3",op1f)
}
if (opp2g.isTouching(mc))
{
  op2.velocityX = 0
gameState = "end"
op2.addAnimation("opp2",op2f)
}
if (opp3g.isTouching(mc))
{
  op3.velocityX = 0
gameState = "end"
op3.addAnimation("opp3",op3f)
}
}
if (gameState == "end")
{
  opp1g.setVelocityXEach(0);
  opp2g.setVelocityXEach(0);
  opp3g.setVelocityXEach(0);
  rad.velocityX = 0
  //op1.addAnimation("opp3",op1f)
  //op2.addAnimation("opp2",op2f)
  //op3.addAnimation("opp3",op3f)
}


  drawSprites()
}
function opp1()
{
op1 = createSprite (1300,Math.round(random(25,275)))
op1.addAnimation("opponent1",op1img)
op1.scale = 0.1
op1.velocityX = -10
opp1g.add(op1)
}
function opp2()
{
op2 = createSprite (1300,Math.round(random(25,275)))
op2.addAnimation("opponent2",op2img)
op2.scale = 0.1
op2.velocityX = -10
opp2g.add(op2)
}
function opp3()
{
op3 = createSprite (1300,Math.round(random(25,275)))
op3.addAnimation("opponent3",op3img)
op3.scale = 0.1
op3.velocityX = -10
opp3g.add(op3)
}