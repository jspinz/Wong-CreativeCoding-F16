var url1;
var url2;
var url3;
var url4;
var baseUrl;

var globalData;

var input;
var inputButton;
var myData;
var url;
var globalDataName;
var globalDataTemp;
var city;

function setup() {
    createCanvas(1000, 700);
    baseUrl = "http://api.openweathermap.org/data/2.5/weather?";

    APIkey = "89309063680894bde99f0b41e0e6ccbc";


    background(0);
    fill(255);
    textSize(16);
    text("Input the city of where you want to know the temperature to!", width / 6, 30);


    fill(255);
    textSize(14);

   APIkey;
    url = baseUrl + "q=" + city + "&appid=" + APIkey;

    myData = loadJSON(url, gotData);
    input = createInput("City Name");
    input.position(300, 100);
    inputButton = createButton("Submit");
    inputButton.position(450, 100);
    inputButton.mousePressed(readValue);


}

function gotData(myData) {
    globalData = myData;
    //    console.log(globalData);

    globalDataName = myData.name;
    console.log(globalDataName);


    //temperature is in kelvin 
    // 0 K = K * (9/5) -459.67 F
    globalDataTemp = myData.main.temp * (9 / 5) - 459.67;

    console.log(globalDataTemp);

};

function readValue() {
    city = input.value();
    console.log(city);

    baseUrl = "http://api.openweathermap.org/data/2.5/weather?";

    APIkey = "89309063680894bde99f0b41e0e6ccbc";

    url = baseUrl + "q=" + city + "&appid=" + APIkey;

    myData = loadJSON(url, gotData);
}


function draw() {

    background(0);
    fill(255);
    textSize(16);
    text("Input the city of where you want to know the temperature to!", width / 6, 30);


    fill(255);
    textSize(14);



    fill(255);
    text(str(globalDataName), 100, 300);
    text(str(globalDataTemp) + " \xB0 F", 200, 300);
    if (globalDataTemp < 40) {
        fill(0, 125, 255);
        rect(400, 280, 200, 50);
        // println("cold");
    } else if (globalDataTemp > 40 && globalDataTemp < 50) {
        fill(255, 200, 0);
        rect(400, 100, 200, 50);
        //println("not that cold");
    } else if (globalDataTemp > 50 && globalDataTemp < 60) {
        fill(255, 200, 100);
        rect(400, 280, 200, 50);

        //println("warmer");
    } else if (globalDataTemp > 60) {
        fill(255, 0, 0);
        rect(400, 280, 200, 50);
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
    text(" 60 < #", 900, 215);
}

