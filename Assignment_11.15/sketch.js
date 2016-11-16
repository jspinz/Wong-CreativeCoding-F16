var myData;
var offset;
var scaleData;

function preload(){

	//load JSON formatted data from URL
	//var url = 'http://nflarrest.com/api/v1/crime/topTeams/DUI';
	//myData = loadJSON(url);
    
    myData=loadJSON("assets/dui.json");
}


function setup(){

	createCanvas(1200,400);

	offset = 80;
	scaleData = 5;
	println(myData.football.length);

	textSize(14);

	for(var i = 0; i < myData.football.length; i++){
		println(myData.football[i].Team_name);
        println(myData.football[i].arrest_count);
	}
}

function draw(){

	background(0);
    text("The top teams in the NFL with the most DUI counts",10,30);
    textSize(20);
    fill(255);
	push();

	translate(10,50);

	for(var i = 0; i < myData.football.length; i++){

		var myHeight = myData.football[i].arrest_count;
		var myName = myData.football[i].Team_name;
        
        
        fill(255,0,0);
		rect(i * offset, 40, 45, myHeight * scaleData);
        fill(0,140,255);
        textSize(12);
		text(myName, i * offset, 20, 40, 40);
        

	
	}
 

	pop();
}