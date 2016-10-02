var offset=15;
function setup(){
    createCanvas(600,600);
}



function draw(){
    // one-dimensional for-loop
    for(var i=0; i<300;i=i+30 ){
        fill(0);
      ellipse((width/3)+i,(height/3),offset,offset);
   }
    
    
    //two-dimensional for-loop
    for(var i=0; i<300;i=i+30 ){
        for(var j=0;j<150;j=j+30){
            fill(0,100,200);
            rect((width/2)+i,(height/2)+j,offset,offset);
        }
    }
            
}