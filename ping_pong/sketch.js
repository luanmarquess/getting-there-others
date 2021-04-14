let xBall = 300;
let yBall = 200;

let diameter = 15;
let ballRadius = (diameter / 2);

let xBallSpeed = 7;
let yBallSpeed = 7;

let xPlayerRacket = 5;
let yPlayerRacket = 175;
let xSizeRacket = 10;
let ySizeRacket = 50;

let xComputerRacket = 585;
let yComputerRacket= 175;
let computerSpeedRacket;

let collision = false;

let playerPoints = 0;
let computerPoints = 0;

let hitSound;
let scoreSound;
let musicSound;

function preload(){
  hitSound = loadSound("audio/raquetada.mp3");
  scoreSound = loadSound("audio/ponto.mp3");
  musicSound = loadSound("audio/trilha.mp3");
}


function setup() {
  musicSound.loop();
  createCanvas(600, 400);
}

function draw() {
  showBall();
  moveBall();
  ballLimit();
  playerRacket(xSizeRacket,ySizeRacket);
  computerRacket(xSizeRacket,ySizeRacket);
  racketMove();
  checkRacketCollision(xPlayerRacket, yPlayerRacket);
  moveComputerRacket();
  checkRacketCollision(xComputerRacket, yComputerRacket);
  showScoreboard();
  score();

}


function showBall(){
  background(0);
  circle(xBall,yBall,diameter)
}

function moveBall(){
  xBall += xBallSpeed;
  yBall += yBallSpeed;
}

function ballLimit(){
  
    if (xBall + ballRadius > width || xBall < ballRadius ) {
    xBallSpeed *= -1;
  }
  if (yBall + ballRadius > height || yBall < ballRadius) {
    yBallSpeed *= -1;
  } 
}

 function playerRacket(sizeWidth,sizeHeight){
   
   rect(xPlayerRacket, yPlayerRacket, sizeWidth, sizeHeight);
   
 }

function racketMove(){
  
  if (keyIsDown(UP_ARROW)){
    yPlayerRacket -= 8
  }
   if (keyIsDown(DOWN_ARROW)){
    yPlayerRacket += 8
  }
}

function checkRacketCollision(x,y){
  
    collision = collideRectCircle (x, y, xSizeRacket, ySizeRacket, xBall, yBall, ballRadius);  
  
    if(collision){
      xBallSpeed *= -1
      hitSound.play();
    }
}

function computerRacket(sizeWidth,sizeHeight){
  
    rect(xComputerRacket, yComputerRacket,sizeWidth, sizeHeight);
  
  
}

function moveComputerRacket(){
  computerSpeedRacket = yBall - yComputerRacket - ySizeRacket /2 - 28;
  yComputerRacket +=  computerSpeedRacket
  
}
function showScoreboard(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255,69,0));
  rect(155,5,90,30)
  fill(255);
  text("Yours: " + playerPoints, 200,26);
  fill(color(255,69,0));
  rect(340,5,120,30);
  fill(255);
  text("Computer: " + computerPoints, 400, 26);
}

function score(){
  if(xBall > 590){
    playerPoints++;
    scoreSound.play();
    xBall = 300;
    yBall = 200;
  }else if(xBall < 10){
    computerPoints++;
    scoreSound.play();
    xBall = 300;
    yBall = 200;
  }
}


