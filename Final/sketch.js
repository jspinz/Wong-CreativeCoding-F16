//var video;
//
//function setup() {
//    createCanvas(320, 240);
//    pixelDensity(1);
//    video = createCapture(VIDEO);
//    video.size(320,240);
//
//}
//
//function draw() {
//    background(51);
//    video.loadPixels();
//    loadPixels();
//    for (var y = 0; y < height; y++) {
//        for (var x = 0; x < width; x++) {
//            var index = (x + y * width) * 4;
//            pixels[index + 0] = video.pixels[index];
//            pixels[index + 1] = video.pixels[index];
//            pixels[index + 2] = video.pixels[index];
//            pixels[index + 3] = 255;
//       }
//    }
//    updatePixels();
//
//}
var capture;
var vScale = 8; //scale of video we want to take from

function setup() {
    createCanvas(800, 600);
    pixelDensity(1);
    capture = createCapture(VIDEO);
    capture.size(width / vScale, height / vScale);
    capture.hide();

    //for retina displays
}

function draw() {
    background(51);
    //    image(capture, 0, 0, 800, 600);
    capture.loadPixels();
    loadPixels();
    for (var y = 0; y < capture.height; y+=1) {
        for (var x = 0; x < capture.width; x++) {
            var index = (x + y * capture.width) * 4;
            //            var index=(capture.width - x + 1 + (y * capture.width))*4
            var r = capture.pixels[index + 0];
            var g = capture.pixels[index + 1];
            var b = capture.pixels[index + 2];
            var current=color(r,g,b);
//            console.log(current);
            var skinToneMin=color(150,140,120);
            var skinToneMax=color(160,120,100);
            var eyesMin=color(70,70,70);
            var eyesMax=color(80,80,80);
            var hairMin=color(0);
            var hairMax=color(54,33,0);
            
            
//            if(eyesMin<current&&eyesMax>current){
//                fill(current);
//            }else{
//                fill(195,0,130);
//            }
            if(current==color(0)){
                fill(current);
            }else{
                fill(random(100,255),0,random(100,200));
            }
            if(skinToneMin<current && skinToneMax>current){
                fill(current);
            }else{
                fill(random(100,255),0,random(100,200));
            }
            if(hairMin<current&&hairMax>current){
                fill(current);
            }else{
                fill(random(100,255),0,random(100,200));
            }
            
            
//            fill(r, g, b);
//            rect(x * vScale, y * vScale, vScale, vScale);
            polygon(x*vScale,y*vScale,vScale,6);

        }
    }
}
//background(102);

//    for (var x = 0; x < width + w; x += (w * cos(PI / 6) * 2)) {
//        var counter = 0;
//        for (var y = 0; y < height + w; y += w * (1 + cos(PI / 3))) {
//
////
////            var index = (x + y * capture.width) * 4;
//                        var index=(capture.width - x + 1 + (y * capture.width))*4
//            var r = capture.pixels[index + 0];
//            var g = capture.pixels[index + 1];
//            var b = capture.pixels[index + 2];
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