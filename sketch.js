var thickness,wall;
var speed,weight,bullet



function setup() {
 createCanvas(1600,400);
 bullet = createSprite(50,160,20,20)
  wall = createSprite(1200, 200, thickness, height/2);
  speed = random(223,331)
  weight = random(30,52);
   thickness=random(22,83);

}

function draw() {
  background(0,0,0); 
  bullet.shapeColor=color(255,255,255);
  bullet.velocityX = speed;
  wall.shapeColor= color(80,80,80);
  
  

if(hascollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor = color(255,0,0)
  }

  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
}
  
  
  drawSprites();
}
function hascollided(bullet,wall){
  bulletRightEdge = bullet.x - bullet.y;
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
