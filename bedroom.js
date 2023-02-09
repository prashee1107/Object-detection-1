img = "";
status = "";
odject = [];

function preload(){
    img = loadImage("bed room.jpeg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelloaded(){
    console.log("Model Loaded!");
   status = "true";
   objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
}
function draw(){
    image(img,0,0,640,420);
}