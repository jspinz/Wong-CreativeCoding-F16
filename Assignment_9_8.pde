size(300,400);

int maxX=300;
int maxY=400;
//background color
fill(150,247,249);
noStroke();
rect(0,0,maxX,maxY);
fill(130,247,249);
noStroke();
rect(0,0,maxX,150);
fill(111,247,249);
noStroke();
rect(0,200,maxX,350);


//midpoint of v-neck x-coordinate
int midVx = 150;
//y-coordinate
int midVy = 300;


//start shirt
beginShape();
//bottom left
vertex(0,400);
vertex(0,325);
//left shoulder-neck
vertex(midVx-70,300);
vertex(midVx,midVy+50);
//right shoulder-neck
vertex(midVx+70,300);
vertex(300,325);
//bottom right
vertex(300,400);


fill(24,12,232);
endShape();

//neck
beginShape();

//vneck cut
vertex(midVx-70,300);
vertex(midVx,midVy+50);
vertex(midVx+70,300);

vertex(midVx+50,220);
vertex(midVx,midVy-60);
vertex(midVx-50,220);
fill(255,214,146);
endShape();

//headOutline
beginShape();
//chin
vertex(midVx-20,midVy-30);
vertex(midVx+20,midVy-30);

//rightsideJaw
vertex(midVx+60,midVy-60);
vertex(midVx+80,midVy-100);

//top of head
vertex(midVx+80,midVy-220);
vertex(midVx-80,midVy-220);

//left jaw line
vertex(midVx-80,midVy-100);
vertex(midVx-60,midVy-60);

fill(245,206,140);
endShape();

//hair
beginShape();
vertex(midVx-80,midVy-220);
vertex(midVx-80,midVy-270);
vertex(midVx-70,midVy-280);
vertex(midVx+70,midVy-280);
vertex(midVx+80,midVy-270);
vertex(midVx+80,midVy-220);
fill(0,0,0);

endShape();

//ears
beginShape();
vertex(midVx-80,midVy-180);
vertex(midVx-90,midVy-200);
vertex(midVx-100,midVy-180);
vertex(midVx-80,midVy-120);

fill(255,214,146);
endShape();

beginShape();
vertex(midVx+80,midVy-180);
vertex(midVx+90,midVy-200);
vertex(midVx+100,midVy-180);
vertex(midVx+80,midVy-120);
fill(255,214,146);
endShape();


//eyes
fill(255,255,255);
ellipse(midVx-40, midVy-180, 40, 20);

fill(255,255,255);
ellipse(midVx+40, midVy-180, 40, 20);

//pupils
fill(76,56,42);
ellipse(midVx-40, midVy-180, 10, 10);
fill(76,56,42);
ellipse(midVx+40, midVy-180, 10, 10);

//brows
rect(midVx-60,midVy-200,40,5);
rect(midVx+20,midVy-200,40,5);

//nose
fill(255,214,146);
triangle(midVx, midVy-180, midVx-20, midVy-100, midVx+20, midVy-100);

//mouth
fill(0.5,0.5,0.5);
rect(midVx-30,midVy-70,60,5);