var astro,astroImage,astrogroup;
var score;
var diamond,diamondImage;
var gamestate,PLAY,END;
var moon,moonImage;
var asteroid,asteroidImage;


function preload() {

  bgimg = loadImage("images/mygamebg(1).jpg");
  astroImage=loadImage("images/pro8 astro.png");
  moonImage=loadImage("images/moon remove.png");
  diamondImage=loadImage("images/diamond.png");
  asteroidImage=loadImage("images/astroid.png");
  
}

function setup() {
  
 createCanvas(windowWidth,windowHeight);
 
  bg = createSprite(windowWidth,windowHeight);
  bg.addImage("bgimg", bgimg);
  bg.scale =1.2

  invground = createSprite(height / 2, 390, height, 10);
  invground.visible = false;

  astro=createSprite(400,500,50,50);
  astro.addImage(astroImage);
  astro.scale=0.5;

  moon=createSprite(1300,100,50,50);
  moon.addImage(moonImage);
  moon.scale=0.7;

  diamond=createSprite(450,400,50,50);
  diamond.addImage(diamondImage);
  diamond.scale=0.07;

  asteroid=createSprite(500,600,50,50);
  asteroid.addImage(asteroidImage);
  asteroid.scale=0.3;

gamestate=1;
PLAY=1;
END=0;

}

function draw() {
 
  background(220);


  if (gamestate === PLAY) {
    
    bg.velocityY = -5;

    if (bg.y < 0) {
      bg.y = bg.height / 2;
    }
    if(keyDown(UP_ARROW)){
      astro.y=astro.y-2;
    }
    if(keyDown(DOWN_ARROW)){
      astro.y=astro.y+2;
    }
    if(keyDown(LEFT_ARROW)){
      astro.x=astro.x-2;
    }
    if(keyDown(RIGHT_ARROW)){
      astro.x=astro.x+2;
    }
  }

  if (gamestate === END) {
    bg.velocityY = 0;
  }

 bg.display();
 invground.display();
 astro.display();
 moon.display();
 diamond.display();
 asteroid.display();

  drawSprites();
}

  

