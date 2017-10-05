var linex = 0;
var url1 = 'http://api.open-notify.org/iss-now.json';
var issX = 0 ;
var issY = 0 ;

function setup(){
	createCanvas(600,400);

	setInterval(askISS, 1000);
	
		
}

function askISS(){
	loadJSON(url1, gotData);
}

function gotData(data){
	var lat = data.iss_position.latitude;
	var long = data.iss_position.longitude;
	issX = map(lat, -60, 10, 0, width);
	issY = map(long, -40,10,0,height);

}


function draw(){
	background(0);

	fill(255);
	ellipse(issX,issY, 24, 24);

	stroke(255);
	line(linex, 0, linex, height);
	linex+=5;
	if(linex > width){
		linex = 0;
	}
	
}

