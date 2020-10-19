var PLAY = 1;
var END = 0;
var gameState = 1;


var sword,swordI,sword2;

var fruit,fruit1,fruit2,fruit3,fruit4;
var monster,monster1;

var background,backgroundImage;

var splash,splash1;
var fruitGroup , enemyGroup; 
  
var score,so,so;

var gameoverI,gameover;
var rstart,rstart1;
var rstart2,rstart3;



var sound1;

function preload(){
  
 swordI = loadImage("sword.png");
  
  fruit1 = loadImage("fruit1.png");
   fruit2 = loadImage("fruit2.png");
   fruit3 = loadImage("fruit3.png");
   fruit4  = loadImage("fruit4.png");
   monster1 = loadImage("Bomb.png");
  
backgroundImage = loadImage("Jungle.png");

    gameoverI = loadImage("gameover.png");

 rstart1 = loadImage("restart (1).png");
rstart3 = loadImage("R2.png");

sword2 = loadImage("Knife.png");

sound1 = loadSound("score2.mp3")

sound3 = loadSound("Bomb.mp3")
}

function setup() {
 createCanvas(600, 600);



  
   background = createSprite(250,250,6,6);
  background.addImage(backgroundImage);
  background.scale = 3.0;
  
 
  fruitGroup2 = createGroup();
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  
  sword = createSprite(40,200,20,20);
  sword.addAnimation("sword", swordI);
sword.scale = 0.7;
  
 // fruitGroup = new Group();
  
   fruitGroup2 = createGroup();
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  enemyGroup2 = createGroup();
  
 //sword.debug = true; 
sword.setCollider("circle",0,0,30);
  
 gameover = createSprite(300,200,20,20);
  gameover.addImage("over",gameoverI )

gameover.visible = false;
  
   
  rstart= createSprite(300,200,20,20);
  rstart.addImage("over",rstart1 )
 rstart.scale = 0.7;
 rstart.visible = false;
  
  
  
 rstart2= createSprite(300,300,20,20);
  rstart2.addImage("over",rstart3 )
 rstart2.scale = 0.1;
  rstart2.visible = false;
  
  score =0;
  
  
}






function draw(){
 
  background.velocityX = -3 
  
  if (background.x < 4){
      background.x = background.width/5;
    }
  
  
  
  if(gameState === PLAY){
      
  sword.y=World.mouseY;
 sword.x=World.mouseX;
     
    
  
  if ( fruitGroup.isTouching( sword)){
   fruitGroup.destroyEach();
   score=score+1;
  sound1.play();
  }
  
   if ( fruitGroup2.isTouching( sword)){
   fruitGroup2.destroyEach();
   score=score+1;
  sound1.play();
   }
  
   if( enemyGroup.isTouching(sword)){
        gameState = END;
      sound3.play();
   }
    
    if( enemyGroup2.isTouching(sword)){
     
      gameState = END;
      sound3.play();
    }
    
     Enemy()
  
  fruit();
    
  }
   else if (gameState === END) {
   
   
 
     
     
     
     
      gameover.visible = true;
  rstart.visible = true;
rstart2.visible = true;
     
     score = 0;
    
     if( keyDown("r") ){
   gameState =PLAY;
       
       gameover.visible = false;
  rstart.visible = false;
rstart2.visible = false;
     
    }
     
   }
  
  
     
 
  
  
  
  
  
 
  drawSprites();
  
  
   text("Score: "+ score, 450,50);
  text("When game over Press (r) ", 100,50);

}

function fruit(){

  if (frameCount%100===0){
  var  fruit = createSprite(600,400,20,20)
  fruit.scale = 0.2;
  
  r=Math.round(random(1,4))
  switch(r) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
     
      default: break;
  }

    
    
    
    
  fruit.y=Math.round(random(300,100))
   fruit.x=Math.round(random(500,600))
    
   fruit.velocityX=-(7+(score/4));
  fruit.setLifetime=100;
  fruitGroup.add(fruit);
  }
   
  
  if (frameCount%80===0){
  var  fruit0 = createSprite(300,600,20,20)
  fruit0.scale = 0.2;
  
  r=Math.round(random(1,4))
  switch(r) {
      case 1: fruit0.addImage(fruit1);
              break;
      case 2: fruit0.addImage(fruit2);
              break;
      case 3: fruit0.addImage(fruit3);
              break;
      case 4: fruit0.addImage(fruit4);
              break;
     
      default: break;
  }


  fruit0.y=Math.round(random(600,600))
  fruit0.x=Math.round(random(400,100))
  
    fruit0.velocityY=-(4+(score/4));
  fruit0.velocityX=(2+(score/4));
    fruit0.setLifetime=100;
   fruitGroup2.add(fruit0);
  }
  
  
  
  }

function Enemy(){



  if (frameCount%100===0){
 
    var  monster = createSprite(600,400,20,20)
  monster.addImage("monster", monster1 );
  monster.scale=0.2;
  monster.y=Math.round(random(100,300));
  
    monster.velocityX=-(8+(score/10));
   monster.setLifetime = 50; 
    enemyGroup.add(monster);
  }

 if (frameCount%200===0){
 
    var  monster2 = createSprite(300,600,20,20)
  monster2.addImage("monster", monster1 );
  monster2.scale=0.2;
 monster2.y=Math.round(random(600,600))
   monster2.x=Math.round(random(400,100))
 
   
   monster2.velocityY=-(5+(score/10));
   monster2.velocityX=(2+(score/10));
   monster2.setLifetime = 50; 
    enemyGroup2.add(monster2);
  }

  
}


