var capture;
var vScale = 8; //scale of video we want to take from smaller video

function setup() {
    createCanvas(800, 600);
    pixelDensity(1); //for retina displays
    capture = createCapture(VIDEO);
    capture.size(width / vScale, height / vScale);
    capture.hide();


}

function draw() {
    background(51);
    //    image(capture, 0, 0, 800, 600);
    capture.loadPixels();
    loadPixels();
    for (var y = 0; y < capture.height; y += 1) {
        for (var x = 0; x < capture.width; x++) {
            var index = (x + y * capture.width) * 4;
            //            var index=(capture.width - x + 1 + (y * capture.width))*4  
            var r = capture.pixels[index + 0];
            var g = capture.pixels[index + 1];
            var b = capture.pixels[index + 2];
            var current = color(r, g, b);
            //            console.log(current);
            //            var skinToneMin=color(150,140,120);
            //            var skinToneMax=color(160,120,100);
            ////            var skinToneMin=color(233,155,111);
            ////            var skinToneMax=color(255,245,189);
            //            var eyesMin=color(70,70,70);
            //            var eyesMax=color(80,80,80);
            //            var hairMin=color(20,0,0);
            //            var hairMax=color(44,30,5);
            //            
            //            
            //            if(eyesMin<current&&eyesMax>current){
            //                fill(current);
            //            }else{
            //                fill(random(100,255),0,random(100,200));
            //            }
            ////            
            //            //color test to display
            ////            if(current==color(1)){
            ////                fill(current);
            ////            }else{
            ////                fill(random(100,255),0,random(100,200));
            ////            }
            //            if(skinToneMin<current && skinToneMax>current){
            //                fill(current);
            //            }else{
            //                fill(random(100,255),0,random(100,200));
            //            }
            //            if(hairMax>current){
            //                fill(random(100,255),0,random(100,200));
            //            }else{
            //                fill(current);
            //            }
            //            

            var skinToneMin = color(150, 140, 120);
            var skinToneMax = color(160, 120, 100);
            var eyesMin = color(70, 70, 70);
            var eyesMax = color(80, 80, 80);
            var hairMin = color(0);
            var hairMax = color(54, 33, 0);


            //            if(eyesMin<current&&eyesMax>current){
            //                fill(current);
            //            }else{
            //                fill(195,0,130);
            //            }

            //color test to display
            if (current == color(0)) {
                fill(current);
            } else {
                fill(random(100, 255), 0, random(100, 200));
            }
            if (skinToneMin < current && skinToneMax > current) {
                fill(current);
            } else {
                fill(random(100, 255), 0, random(100, 200));
            }
            if (hairMin < current && hairMax > current) {
                fill(current);
            } else {
                fill(random(100, 255), 0, random(100, 200));
            }



            //            fill(r, g, b);
            //            rect(x * vScale, y * vScale, vScale, vScale);
            polygon(x * vScale, y * vScale, vScale, 6);

        }
    }
}

//trying to implement perfect hexagon grid background but image wont display for some reason when pushed
//used majority of syntax from here: https://forum.processing.org/two/discussion/12400/hexagonal-video-pixel-grid-question 
//background(102);

//    for (var x = 0; x < width + w; x += (w * cos(PI / 6) * 2)) {
//        var counter = 0;
//        for (var y = 0; y < height + w; y += w * (1 + cos(PI / 3))) {
//
//            
//            noFill();
//            push(); {
//                translate(x - ((w * cos(PI / 6)) * (counter % 2)), y);
//                rotate(radians(30));
//                polygon(0, 0, 10, 6);
//
//            }
//            pop();
//
//            counter++;
//            //            
//
//        }}
//
//}
//

//https://p5js.org/examples/form-regular-polygon.html
function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}