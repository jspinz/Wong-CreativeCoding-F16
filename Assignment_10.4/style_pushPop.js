var offSet = 50;

function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    push();
   
        fill(30, 30, 255);
        translate(150, 100);
        rotate(PI/4);
        scale(0.5);
    
        //manual rectangles
        rect(0, 0, 40, 40);  //first rectangle
        rect(50,50,40,40);  //second rectangle
        rect(100,100,40,40);    //third rectangle
    
        //for-loop
        fill(255,0,0);
        translate(200,250);
        scale(2);
        rotate(PI);
        for(var i=0;i<300;i=i+30){
            ellipse(0,i,20,20);
        }
    pop();
}