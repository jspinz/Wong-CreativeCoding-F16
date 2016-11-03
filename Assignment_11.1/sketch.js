var ballArray = [];
var squareArray = [];
var ballzArray = [];

function setup() {
    createCanvas(1000, 600);

    //myBall = new Ball(xPos, yPos, vel);
    for (var i = 0; i < 3; i++) {
        ballArray[i] = new Ball(random(0, width), random(0, height), 1, color(random(0, 255), 0, random(0, 255)));
    }

    for (var k = 0; k < 5; k++) {
        ballzArray[k] = new Ballz(random(0, width), random(0, height), 2, color(random(0, 255), random(0, 255), 0));

    }
    for (var j = 0; j < 6; j++) {
        squareArray[j] = new Squares(random(0, width), random(0, height), random(0, 10), random(0, 5), color(0, random(0, 255), random(0, 255)));

    }
    noStroke();

}

function draw() {
    background(0, 125, 255);

    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].animateBall();
        ballArray[i].displayBall();
    }

    for (var j = 0; j < squareArray.length; j++) {
        squareArray[j].animateSq();
        squareArray[j].displaySq();
    }

    for (var k = 0; k < ballzArray.length; k++) {
        ballzArray[k].animateBallz();
        ballzArray[k].displayBallz();
    }

}

function mouseClicked() {

    //create a temporary object to push into the array
    var tempBall = new Ball(mouseX, mouseY, random(6, 8), color(random(0, 255), 0, random(0, 255)));
    var tempBallz = new Ballz(mouseX, mouseY, random(2, 5), color(random(0, 255), random(0, 255), 0));
    var tempSq = new Squares(mouseX, mouseY, random(1, 3), random(2, 5), color(0, random(0, 255), random(0, 255)));
    //array.push() function adds a new element to the end of the array
    if (mouseX < 300) {
        ballArray.push(tempBall);
    }
    if (mouseX > 300 && mouseX < 700) {
        ballzArray.push(tempBallz);
    }
    if (mouseX > 700) {
        squareArray.push(tempSq);
    }
}

function Ball(_x, _y, _vel, b) {

    this.x = _x;
    this.y = _y;
    this.vel = _vel;

    this.animateBall = function () {
        //animate ball
        this.x += this.vel;
        if (this.x > width || this.x < 0) {
            this.vel = -this.vel;
        }
    }

    this.displayBall = function () {
        //draw ball
        fill(b);
        ellipse(this.x, this.y, 30, 30);
    }
};

function Ballz(xx, yy, vvel, v) {

    this.xx = xx;
    this.yy = yy;
    this.vvel = vvel;

    this.animateBallz = function () {
        //animate ball
        this.yy += this.vvel;
        if (this.yy > height || this.yy < 0) {
            this.vvel = -this.vvel;
        }
    }

    this.displayBallz = function () {
        //draw ball
        fill(v);
        ellipse(this.xx, this.yy, random(0, 40), random(0, 40));
    }
};


function Squares(x_, y_, velX, velY, c) {

    this.xSq = x_;
    this.ySq = y_;
    this.velX = velX;
    this.velY = velY;

    this.animateSq = function () {
        //animate square
        this.ySq += this.velY;
        this.xSq += this.velX;
        if (this.ySq > height || this.ySq < 0) {
            this.velY = -this.velY;
        }
        if (this.xSq > width || this.xSq < 0) {
            this.velX = -this.velX;
        }
    }

    this.displaySq = function () {
        //draw square
        fill(c);
        rect(this.xSq, this.ySq, 30, 30, 10);

    }

};