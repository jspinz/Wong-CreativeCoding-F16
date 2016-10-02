var myPos=0;
var otherPos=0;
var offset=15;
var asdf=0;
var qwerty=0;

function setup(){
    
    createCanvas(850,450);
    fill(0);
   
    rect(0,0,width-1,height-1);
    
}

function draw(){
    strokeWeight(4);
    stroke(255);
    
//top left corner diagnol
    for(var i=0;i<=height/2;i=i+10){
       // for(var j=0;j<=width/4;j=j+10){
            line(i,0,i,(height/2)-i+6);
       // }
    }
    
//bottom left corner diagnol
     for(var i=0;i<height/2;i=i+10){
      //  for(var j=0;j<width/4;j=j+10){
            line(i,(height/2)+i+5,i,(height)+i+5);
       // }
    }
    
//top 1/4 to mid
    for(var i=0;i<width/2;i=i+10){
        for(var j=0;j<height/2;j=j+10){
            line((width/4)-j+17,j,(width/2)-j+17,j);
        }
    }
    
//top mid to 3/4
   // for(var i=0;i<width/2;i=i+10){
        for(var j=0;j<height/2; j=j+10){
             line((width/2)+j-11,j,(3*width/4)+j-11,j);
        }
   // }
    
//bottom 1/4 to mid
    while(myPos<width/4){
        while(otherPos<height){
            line(0+myPos,(height/2)+otherPos+5,(width/4)+myPos,(height/2)+otherPos+5);
            myPos=myPos+10;
            otherPos=otherPos+10;
        }
    }
    
// bottom 1/2 to 3/4

   // for(var i=0;i<width;i=i+10){
        for(var j=0;j<height;j=j+10){
            line((3*width/4)-j-4,(height/2)+j+5,(width)-j-4,(height/2)+j+5);
        }
 //   }   
    
    
//top right corner 3/4 to end
    for (var i=0;i<=width;i=i+10){
//        for (var j =0; j<=height/2;j=j+10){
            line((3*width/4)+i,0,(3*width/4)+i,i+10);
       // }
    }

//bottom right corner
    for(var i=0; i<=width;i=i+10){
       // for(var j=0;j<=height;j=j+10){
            line((3*width/4)+i,height,(3*width/4)+i,height-i-10);
       // }
    }
    
//middle top left
    for(var i=0;i<=height/2;i=i+10){
      
            line((width/4)+i,(height/2)+5,(width/4)+i,(height/2)-i+5);
    }
//bottom left
    for(var i=0;i<=height/2;i=i+10){
      
            line((width/4)+i,(height/2)+5,(width/4)+i,(height/2)+i+5);
    }

//middle top right
        for(var i=0;i<=height/2;i=i+10){
      
            line((3*width/4)-i+5,(height/2)+5,(3*width/4)-i+5,(height/2)-i+5);
    }
    
    //middle bottom right
        for(var i=0;i<=height/2;i=i+10){
      
            line((3*width/4)-i+5,(height/2)-5,(3*width/4)-i+5,(height/2)+i-5);
    }
    
    
    

//test
//    
//    line(width/4,height/2,width/2,height/2)
//
//    
//    
//    
//    for(var i=0; i<300;i=i+30 ){
//        ellipse((width/2)+i,(height/2),offset,offset);
//    }
//    

    
}