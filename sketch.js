var trex, trexCollided, trex_Running;
var ground, groundImage, invisibleGround;
var score;
var cloudsGroup, cloudImage, cloud;
var obstacle, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

function preload() {
  trex_Running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trexCollided = loadAnimation("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(100, 180, 100, 100);
  trex.x = 50;
  trex.scale = 0.5;
  trex.addAnimation("running", trex_Running);

  ground = createSprite(200, 200, 400, 400);
  ground.addImage(groundImage);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  invisibleGround = createSprite(200, 210, 400, 10);
  invisibleGround.visible = false;

  score = 0;
}

function draw() {
  background("white");

  text("Score"+score,500,50);
  score = score + Math.round(frameCount/60);

  if (keyDown("space") && (trex.y > 100)) {
    trex.velocityY = -10;
  }

  if(ground.x<0){
    ground.x = ground.width / 2;
  }

  trex.velocityY = trex.velocityY + 0.8;

  trex.collide(invisibleGround);
  drawSprites();
  cloudsSpawn();
  obstacleSpawn();
}

function cloudsSpawn() {
  if(frameCount % 60 == 0) {
    cloud = createSprite(650,100,100,100);
    cloud.scale = 0.5;
    cloud.addImage(cloudImage);
    cloud.y = Math.round(random(10,60));
    cloud.velocityX = -3;

    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}

function obstacleSpawn() {
  if(frameCount % 60 == 0) {
    var rand = Math.round(random(1,6));

    obstacle = createSprite(650,185,100,100);

    switch(rand) {
      case 1: obstacle.addImage(obstacle1)
        break;
      case 2: obstacle.addImage(obstacle2)
        break;
      case 3: obstacle.addImage(obstacle3)
        break;  
      case 4: obstacle.addImage(obstacle4)
        break;
      case 5: obstacle.addImage(obstacle5)
        break;
      case 6: obstacle.addImage(obstacle6)
        break;
      default:break;
    }
  
    obstacle.scale = 0.5;
    obstacle.velocityX = -4;
    obstacle.lifetime = 400;
  }

}

