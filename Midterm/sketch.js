//function setup() {

//textSize(300);
//fill(0);
//text("ASDF",100,150;

//}





function leftButton() {
    rect(150, 300, 200, 50);
}

function rightButton() {
    rect(600, 300, 200, 50);

}

function middleButton() {
    rect(375, 300, 200, 50);

}



function introScreen() {
    createCanvas(1000, 500);
    background(0);

    middleButton();
    //story line text
    textSize(100);
    fill(255);
    text("WAKE UP!", 250, 250);

    //button text
    textSize(25);
    fill(0);
    text("Huh, where am I?", 377, 323);
    textSize(20);
    text("Press 'q' to continue.",377,346);

    for (var i = 0; i < width; i = i + 30) {
        for (var j = 0; j < height / 3; j = j + 30) {
            fill(0, 100, 200);
            ellipse(i, j, 15, 15);



        }
    }

    for (var i = 0; i < width; i = i + 30) {
        for (var j = 0; j < height / 3; j = j + 30) {
            fill(0, 100, 200);
            ellipse(i, (3 * height / 4) + j - 15, 15, 15);



        }
    }
    for (var i = 0; i < width / 4; i = i + 30) {
        for (var j = 0; j < 3 * height / 4; j = j + 30) {
            fill(0, 100, 200);
            ellipse(i, j, 15, 15);



        }
    }

    for (var i = 3 * width / 4; i < width; i = i + 30) {
        for (var j = 0; j < 3 * height / 4; j = j + 30) {
            fill(0, 100, 200);
            ellipse(i, j, 15, 15);



        }
    }
}

function secondScreen() {
    createCanvas(1000, 500);
    background(255, 217, 7);
    textSize(50);
    fill(0);
    text("You're stranded on an island", 170, 100);
    text("-------------------------------------------", 140, 135);
    text("Where is everybody? What do I do?", 100, 170);
    leftButton();
    rightButton();

    textSize(25);
    fill(255);
    text("Go left", 210, 323);
    textSize(20);
    text("Press 'z' to continue",160,346);

    textSize(25);
    fill(255);
    text("Go right", 650, 323);
    textSize(20);
    text("Press 'x' to continue",610,346);
}

function thirdScreen() {
    createCanvas(1000, 500);
    background(232, 164, 92);
    leftButton();
    rightButton();
    textSize(40);
    fill(0);
    text("Everything seems fine.", 300, 100);
    text("You see an ocean abroad and recall those", 100, 170);
    text("Man vs. Wild episodes. What should I do?", 100, 220);

    textSize(25); //die
    text("Fetch water", 180, 323);
    textSize(20);
    text("Press 'o' to continue",160,346);
    
    textSize(23); //correct
    text("Start on fire signal", 610, 322);
    textSize(20);
    text("Press 'p' to continue",610,346);

}

function fourthScreen() {
    createCanvas(1000, 500); //insert pic as background
    background(255);
    leftButton();
    rightButton();
    middleButton();
    textSize(40);
    fill(0);
    text("The fire teepee is still in construction", 100, 100);
    text("Out in the distance...ALAS A SHIP!!!!", 100, 200);
    
  

    textSize(18);
    fill(0);
    text("Go hunt for more wood", 158, 323);
    text("Press 'b' to continue",158,346)
    
    text("Try to light signal fire", 390, 323);
    text("Press 'n' to continue",390,346);
    
    textSize(17);
    text("Chill out b/c probably", 620, 315);
    text("another boat will come", 620, 330);
    textSize(15);
    text("Press 'm' to continue",620,347);

}

function victoryScreen() {
    createCanvas(1000, 500);
    background(0);
    textSize(50);
    fill(255);
    text("You've been spotted and saved!",150,250);
    
}

function deathScreen() {
    createCanvas(1000, 500);
    background(0);
    textSize(50);
    fill(255);
    text("Your luck has struck out.", 200, 150);
    text("The pirates spot you and you're captured.", 30, 225);
    middleButton();
    textSize(25);
    fill(0);
    text("Press 'r' to Retry", 380, 335);

    for (var i = 0; i < width; i = i + 30) {
        for (var j = 0; j < height / 5; j = j + 30) {
            fill(255, 0, 0);
            ellipse(i + 4, j + 6, 10, 10);



        }
    }

    for (var i = 0; i < width; i = i + 30) {
        for (var j = 3 * height / 4; j < height; j = j + 30) {
            fill(255, 0, 0);
            ellipse(i + 4, j - 2, 10, 10);



        }
    }
}

//function mousePressed() {
//    println("fuck");
//    
//        secondScreen();
//        println("wtf");
//
//    } 
//    if ((mouseX > 150 && mouseX < 350) && (mouseY > 300 && mouseY < 350)) {
//        thirdScreen();
//    } else if ((mouseX > 600 && mouseX < 800) && (mouseY > 300 && mouseY < 350)) {
//        deathScreen();
//        
//
//
//        }
//     if ((mouseX > 150 && mouseX < 350) && (mouseY > 300 && mouseY < 350)) {
//        fourthScreen();
//    } else if ((mouseX > 600 && mouseX < 800) && (mouseY > 300 && mouseY < 350)) {
//        deathScreen();
//        
//
//
//        }
//    
//    
//
//
//
//
//
//
//
//}




//    function mousePressed_2() {
//        if ((mouseX > 150 && mouseX < 350) && (mouseY > 300 && mouseY < 350)) {
//            thirdScreen();
//            println("fduafads");
//        }
//
//
//
//
//    }

//
function keyPressed() {

}


//function mousePressed() {
//
//}



function setup() {
    introScreen();
    //    if (mousePressed() == true) {
    //        secondScreen();
    //        
    //
    //    }


}

//function draw() {
//    if (mousePressed) {
//        if ((mouseX > 375 && mouseX < 575) && (mouseY > 300 && mouseY < 350)) {
//            
//            secondScreen();
//        }
//    
//            if ((mouseX > 150 && mouseX < 350) && (mouseY > 300 && mouseY < 350)) {
//                thirdScreen();
//                if ((mouseX > 150 && mouseX < 350) && (mouseY > 300 && mouseY < 350)) {
//                fourthScreen();
//            }
//            }
//            
//        }
//        
//    }

function draw() {
    if (key == 'q') {
        secondScreen();

    }

    if (key == 'z') {
        thirdScreen();
    } else if (key == 'x') {
        deathScreen();
    }
    
    if(key=='r'){
        introScreen();
    }
    
    if(key=='o'){
        deathScreen();
    }
    else if(key=='p'){
        fourthScreen();
    }
    
    if(key=='b'){
        deathScreen();
    }
    else if(key=='n'){
        victoryScreen();
    }
    else if(key=='m'){
        deathScreen();
    }
}