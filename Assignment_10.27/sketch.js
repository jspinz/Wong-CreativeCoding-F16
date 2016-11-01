var xPos;
var velocity;
var yPos;

var aBall;
var bBall;
var cBall;
var dBall;

var exC;

var aRect;



function setup() {
    createCanvas(1000, 600);


    aBall = new Ball(20, 50, 5, 1, 20, color(10));
    bBall = new Ball(50, 400, 2, 10, 200, color(255, 0, 0));
    cBall = new Ball(1, 2, 3, 1, 500, color(0, 255, 0));
    dBall = new Ball(10, 9, 8, 7, 60, color(0, 0, 255));







    aRect = new backPattern(10, 10);
    aRect.show();
    bRect=new backPattern(50,100);
    bRect.showJ();
    cRect=new backPattern(5,40);
    cRect.showK();



}

function draw() {
    //moveBall(45,80);
    //
    background(125, 125, 125);

    aBall.animate();
    aBall.display();


    bBall.animate();
    bBall.display();


    cBall.animate();
    cBall.display();


    dBall.animate();
    dBall.display();


    aRect.show();
    bRect.showJ();
    cRect.showK();




}



function Ball(xPos, yPos, velocityX, velocityY, radius, c) {
    this.x = xPos;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.y = yPos;
    this.radius = radius;

    this.animate = function () {
        //call animation/motion logic
        this.x = this.x + this.velocityX;
        this.y = this.y + this.velocityY;

        if (this.x >= width || this.x <= 0) {
            this.velocityX = -this.velocityX;

        }

        if (this.y >= height || this.y <= 0) {
            this.velocityY = -this.velocityY;
        }
    }

    this.display = function () {
        // call geometry logic
        fill(c);
        ellipse(this.x, this.y, this.radius, this.radius);
    }





};

function backPattern(rectW, rectH) {
    this.w = rectW;
    this.h = rectH;



    this.show = function () {
        for (var i = 1; i <=width; i = i + 10) {
            this.w = this.w + 10 + i;
            
            line(i, 0, width, this.w);
            
            
        }


    }
    this.showJ = function(){
        for(var j = 1; j<=height; j=j+5){
            this.h=this.h+j;
            
            line(0,j,this.h,height);
        }
    }
    
    this.showK=function(){
        for(var k=1; k<=width/2;k=k+2){
            this.w=this.w+k;
            line(k,0,width,this.w);
        }
    }

};