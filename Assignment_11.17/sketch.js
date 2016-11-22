var url1;
var url2;
var url3;
var url4;
var baseUrl;
var city1;
var city2;
var city3;
var city4;
var APIkey;
var myData1;
var myData2;
var myData3;
var myData4;

var globalData;
//
//var globalDataTemp;
//var globalDataName;
var globalDataName1;
var globalDataName2;
var globalDataName3;
var globalDataName4;

var globalDataTemp1;
var globalDataTemp2;
var globalDataTemp3;
var globalDataTemp4;

function setup() {
    createCanvas(1000, 700);
    baseUrl = "http://api.openweathermap.org/data/2.5/weather?";

    APIkey = "89309063680894bde99f0b41e0e6ccbc";

    city1 = "Tokyo";
    city2 = "London";
    city3 = "New York";
    city4 = "Hawaii";
    url1 = baseUrl + "q=" + city1 + "&appid=" + APIkey;
    url2 = baseUrl + "q=" + city2 + "&appid=" + APIkey;
    url3 = baseUrl + "q=" + city3 + "&appid=" + APIkey;
    url4 = baseUrl + "q=" + city4 + "&appid=" + APIkey;

    myData1 = loadJSON(url1, gotData1);
    myData2 = loadJSON(url2, gotData2);
    myData3 = loadJSON(url3, gotData3);
    myData4 = loadJSON(url4, gotData4);

}

function gotData1(myData1) {
    ////    globalData = myData;
    //    console.log(globalData);
    globalDataName1 = myData1.name;
    console.log(globalDataName1);
    //temperature is in kelvin 
    // 0 K = K * (9/5) -459.67 F
    globalDataTemp1 = myData1.main.temp * (9 / 5) - 459.67;

    console.log(globalDataTemp1);

};

function gotData2(myData2) {
    ////    globalData = myData;
    //    console.log(globalData);
    globalDataName2 = myData2.name;
    console.log(globalDataName2);
    //temperature is in kelvin 
    // 0 K = K * (9/5) -459.67 F
    globalDataTemp2 = myData2.main.temp * (9 / 5) - 459.67;
    console.log(globalDataTemp2);

};


function gotData3(myData3) {
    ////    globalData = myData;
    //    console.log(globalData);
    globalDataName3 = myData3.name;
    console.log(globalDataName3);
    //temperature is in kelvin 
    // 0 K = K * (9/5) -459.67 F
    globalDataTemp3 = myData3.main.temp * (9 / 5) - 459.67;
    console.log(globalDataTemp3);

};


function gotData4(myData4) {
    ////    globalData = myData;
    //    console.log(globalData);
    globalDataName4 = myData4.name;
    console.log(globalDataName4);
    //temperature is in kelvin
    // 0 K = K * (9/5) -459.67 F
    globalDataTemp4 = myData4.main.temp * (9 / 5) - 459.67;
    console.log(globalDataTemp4);

};

function draw() {
    background(0);
    fill(255);
    textSize(16);
    text("Click your mouse to get an updated temperature on the cities below!", width / 6, 30);
    text("Because this is updated from an API, you may not see temperature changes for a period of time")

    fill(255);
    textSize(14);


    text(str(globalDataName1), 100, 100);
    text(str(globalDataTemp1) + " \xB0 F", 200, 100);
    if (globalDataTemp1 < 40) {
        fill(0, 125, 255);
        rect(400, 80, 200, 50);
        // println("cold");
    } else if (globalDataTemp1 > 40 && globalDataTemp1 < 50) {
        fill(255, 200, 0);
        rect(400, 100, 200, 50);

        //println("not that cold");
    } else if (globalDataTemp1 > 50 && globalDataTemp1 < 60) {
        fill(255, 200, 100);
        rect(400, 80, 200, 50);

        // println("warmer");
    } else if (globalDataTemp1 > 60) {
        fill(255, 0, 0);
        rect(400, 80, 200, 50);
    }


    fill(255);
    text(str(globalDataName2), 100, 200);
    text(str(globalDataTemp2) + " \xB0 F", 200, 200);
    if (globalDataTemp2 < 40) {
        fill(0, 125, 255);
        rect(400, 180, 200, 50);
        // println("cold");
    } else if (globalDataTemp2 > 40 && globalDataTemp1 < 50) {
        fill(255, 200, 0);
        rect(400, 100, 200, 50);

        //  println("not that cold");
    } else if (globalDataTemp2 > 50 && globalDataTemp1 < 60) {
        fill(255, 200, 100);
        rect(400, 180, 200, 50);

        // println("warmer");
    } else if (globalDataTemp2 > 60) {
        fill(255, 0, 0);
        rect(400, 180, 200, 50);
    }

    fill(255);
    text(str(globalDataName3), 100, 300);
    text(str(globalDataTemp3) + " \xB0 F", 200, 300);
    if (globalDataTemp3 < 40) {
        fill(0, 125, 255);
        rect(400, 280, 200, 50);
        // println("cold");
    } else if (globalDataTemp3 > 40 && globalDataTemp1 < 50) {
        fill(255, 200, 0);
        rect(400, 100, 200, 50);
        //println("not that cold");
    } else if (globalDataTemp3 > 50 && globalDataTemp1 < 60) {
        fill(255, 200, 100);
        rect(400, 280, 200, 50);

        //println("warmer");
    } else if (globalDataTemp3 > 60) {
        fill(255, 0, 0);
        rect(400, 280, 200, 50);
    }

    fill(255);
    text(str(globalDataName4), 100, 400);
    text(str(globalDataTemp4) + " \xB0 F", 200, 400);
    if (globalDataTemp4 < 40) {
        fill(0, 125, 255);
        rect(400, 380, 200, 50);
        println("cold");
    } else if (globalDataTemp4 > 40 && globalDataTemp1 < 50) {
        fill(255, 200, 0);
        rect(400, 100, 200, 50);
        println("not that cold");
    } else if (globalDataTemp4 > 50 && globalDataTemp4 < 60) {
        fill(255, 200, 100);
        rect(400, 380, 200, 50);

        println("warmer");
    } else if (globalDataTemp4 > 60) {
        fill(255, 0, 0);
        rect(400, 380, 200, 50);
    }


    fill(255);
    textSize(13);
    text("Color Code", 800, 100);
    text("Temp", 900, 100);
    fill(0, 125, 255);
    rect(800, 110, 70, 20);
    text("# < 40", 900, 125);

    fill(255, 200, 0);
    rect(800, 140, 70, 20);
    text("40 < # < 50", 900, 155);

    fill(255, 200, 100);
    rect(800, 170, 70, 20);
    text("50 < # < 60", 900, 185);

    fill(255, 0, 0);
    rect(800, 200, 70, 20);
    text(" 60 < #",900,215);
}

function mouseClicked() {

    url1 = baseUrl + "q=" + city1 + "&appid=" + APIkey;
    url2 = baseUrl + "q=" + city2 + "&appid=" + APIkey;
    url3 = baseUrl + "q=" + city3 + "&appid=" + APIkey;
    url4 = baseUrl + "q=" + city4 + "&appid=" + APIkey;


    myData1 = loadJSON(url1, gotData1);
    myData2 = loadJSON(url2, gotData2);
    myData3 = loadJSON(url3, gotData3);
    myData4 = loadJSON(url4, gotData4);
}