function setup() {
 createCanvas(600, 500);
 background(255);
}

height=500;
width=600;
function draw() {
    
    line(width/2,0,width/2,height);
    line(0,height/3,width/2,height/3);
    line(width-100,0,width-100,height);
  
}

function mouseMoved(){
    //top left rectangle
   if(mouseX<width/2 && mouseY<height/3){
     fill(0,0,0);
     rect(0,0,width/2,height/3);
     
   }
   else{
     fill(255,255,255);
     rect(0,0,width/2,height/3);
   }
   
   //bottom left
   if(mouseX<width/2 && mouseY>height/3){
     fill(0,0,0);
     rect(0,height/3,width/2,height);
   }
   else{
     fill(255,255,255);
     rect(0,height/3,width/2,height);
   }
   
   //middle-right
   if(mouseX>width/2 && mouseX<width-100){
     fill(0,0,0);
     rect(width/2,0,width,height);
    
     
   }
   else if(mouseX>width-100){
     fill(0,0,0);
     rect(width/2,0,width,height);
     fill(120,120,120);
     rect(width-100,0,width,height);
   }
     
   else{
     fill(255,255,255);
     rect(width/2,0,width,height);
   }
   
   
     
 
 
}