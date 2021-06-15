var ball
var start ,startImg
//game states
var SERVE = 2;
var PLAY = 1;
var END  = 0;
var gamestate = SERVE;
var score = 0  

function preload(){
startImg = loadImage("restart.jpg")
}

function setup(){
    createCanvas(700,700);
    ball = createSprite(350,350,10,10);
    ball.shapeColor = "red";

    start = createSprite(350,350,100,100);
    start.shapeColor = "blue";
    start.addImage(startImg)

    fru = new Group();
    obst = new Group();
    plu = new Group();
   
}

function draw(){
  background("black");

  console.log(gamestate)

  if (gamestate === SERVE){

    stroke("black")
    textSize(30)
    fill("white")
    text ("How to Play !! ",200,60) 

    stroke("white")
    textSize(30)
    fill("black")
    text ("Try to pass the red ball over the white boxes" , 40,120)
    text ("as much as you can to make it bigger in size ",40,160)

    text ("Try not to touch the yellow bars or else the",40,210)
    text(" game will end.",40,250)

    text("if the game Ends then click on the restart lable.  ",40,300)
    text("which appears on the screen.",40,340) 

    fill("red")
    text("_____________________________________",40,400)
    fill("white")
    text( "Try to score 1000 points",200,450 )
    fill("red")
    text("_____________________________________",40,500)
    fill("white")
    text ("Click space to continue",200,550)
     
    start.visible = false; 
    ball.visible = false; 

    if (keyDown("space")){
        gamestate = PLAY}

  }

  else if (gamestate === PLAY){
    Food();
    Obstacles();
    plus();

    start.visible = false; 
    ball.visible = true
    ball.x = mouseX
    ball.y = mouseY 

    score += 0.5

    if(ball.isTouching(obst)){
        gamestate = END }
    
    if(ball.isTouching(fru)){
        ball.scale += 0.03 }

    if(ball.isTouching(plu)){
        ball.scale += 0.05 }

 
} else if (gamestate === END){
    fru.setVelocityYEach(0);
    obst.setVelocityYEach(0);
    plu.setVelocityYEach(0);
    start.visible = true
 
    if (mousePressedOver(start))
    {starte();}
}


  drawSprites();

  fill("white")
  textSize(34)
  text("you have scored "+score ,200,650)
  
}

function Food(){
    if (frameCount % 30 === 0){
        food = createSprite(200,00,20,20)
        food.shapeColor = "white"
        food.velocityY = 2
        food.x= random(0,700);
        fru.add(food)
    }
}

function Obstacles(){
    if (frameCount % 70 === 0){
        obs= createSprite(200,00,90,20)
        obs.shapeColor = "yellow"
        obs.velocityY = 2
        obs.x= random(0,700);
        obst.add(obs)
    }
}

function plus(){
    if (frameCount % 500 === 0){
        pl= createSprite(200,00,50,50)
        pl.shapeColor = "green"
        pl.velocityY = 2
        pl.x= random(0,700);
        plu.add(pl)
    }
}

function starte()
 {
    gamestate=PLAY;
    plu.destroyEach();
    fru.destroyEach();
    obst.destroyEach();
    start.visible = false;
    score=0;
    ball.scale = 1
 }
  
