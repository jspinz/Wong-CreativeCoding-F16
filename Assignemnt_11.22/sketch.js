var baseUrl;
var APIkey;
var globalData;
var query;
var myData;
var keys;
var swell = 0;
var title;
var rLength;
var snippet;

function setup() {
    createCanvas(1000, 700);
    baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //    APIkey = "4a132aa184634e7496086b60792dbd0a";
    APIkey = '00139f0960fa42e2a4f51d47a8ceafb6';

//    url = baseUrl + "?q=" + query + "&api-key=" + APIkey;
    url = baseUrl + "?api-key=" + APIkey + "&q=" + query;
    keys = ["shopping", "food"];
    query = keys[swell];
    setInterval(loadData, 4000);
    background(0);
    textSize(30);
    fill(255);
    text("New York Times article headlines for Shopping and Food", width / 9, height / 2);

}

function gotData(myData) {
    globalData = myData;
};

function loadData() {

    title = keys[swell];


//    url = baseUrl + "?q=" + query + "&api-key=" + APIkey;
    url = baseUrl + "?api-key=" + APIkey + "&q=" + query;
    query=keys[swell]
    myData = loadJSON(url, gotData);

    gotData;

    displaySnip();
        swell +=1;
    if (swell > 1) {
        swell = 0;
    }

};

function displaySnip() {
    if (globalData) {
        background(0);
        if (keys[swell] == 'shopping') {
            background(125, 125, 0);
        }
        if (keys[swell] == 'food') {
            background(0, 125, 125);
        }
        if (globalData.response.docs.length < 10) {
            rLength = globalData.response.docs.length;
        } else {
            rLength = 10;
        }
        textSize(50);
        fill(255);
        text(title, 30, 50);
        console.log(rLength);
        for (i = 0; i < globalData.response.docs.length; i++) {
            snippet = globalData.response.docs[i].headline.main;
            textSize(20);
            fill(255);
            text(snippet, 30, 90 + (50 * i));
            console.log(snippet);
        }
    }


};
