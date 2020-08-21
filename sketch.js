var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  //The color used is just to differentiate between wall and the car
  //car.shapeColor = "white";

  wall = createSprite(1500, 200, 60, height/2);
  //The color used is just to differentiate between wall and the car
  wall.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  

  //car.collide(wall);

  if (wall.x - car.x < car.width/2 + wall.width/2) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed/22500);
  
    if (deformation > 180) {
       car.shapeColor = "blue";
    }
  
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = "white";
   }
  
    if (deformation < 100) {
    car.shapeColor = "yellow";
   }
  
  }

  drawSprites();
}