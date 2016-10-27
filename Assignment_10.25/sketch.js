//classwork - go to browser and type in : localhost:8000 (8000 is server, can be changed but need to go into terminal)
//python is running on 2.7.10
//type cd (then drag root folder in after space)
//after that: python -m SimpleHTTPServer 8000 <- 8000 is server

var mySample;

//mySample.loadSound("...");
//mySample.play();
//mySample.stop();
//mySample.isPlaying();
var loopMode;


var circleSize; //size of the circle
var xPos; // x position of the circle
var yPos; // y position of the circle

var xVelocity; // x speed / step of the circle
var yVelocity;

var xDirection; //moving forward or backward?
var yDirection;


function preload() {
    mySample = loadSound("stuff/Ding Sound Effect.mp3")
}

function setup() {

    createCanvas(600, 600);
    background(255, 255, 255);
    circleSize = 30;
    fill(0);

    xPos = 1; //start at 1 so we don't get trapped in our "is X equal to 0?" test below
    yPos = 1;

    xVelocity = 5;
    yVelocity = 3;

    xDirection = 1; //positive 1, moves to the right
    yDirection = 1;

}

function draw() {
    background(255, 255, 255);
    ellipse(xPos, yPos, circleSize, circleSize);

    xPos = xPos + xVelocity;
    yPos = yPos + yVelocity;

    if (xPos >= width || xPos <= 0) {
        xDirection = -xDirection; //now my direction is -1, moving to left
        xVelocity = xVelocity * xDirection; // makes xVelocity negative
        mySample.play();
    }

    if (yPos >= height || yPos <= 0) {
        yDirection = -yDirection;
        yVelocity = yVelocity * yDirection;
        mySample.play();
    }

}







