var noseX=0;
var noseY=0;
var leftWristX=0;
var leftWristY=0;
var rightWristX=0;
var rightWristY=0;
var difference=0;

function preload(){}
function setup(){
    canvas=createCanvas(500,440)
    video=createCapture(VIDEO)
    canvas.position(750,170)
    video.size(500,440)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotResult);
}
function draw(){
    background("#e1f2f2")
    fill("#25798a");
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotResult(result){
    if(result.length>0){
        console.log(result)
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        leftWristX=result[0].pose.leftWrist.x;
        leftWristY=result[0].pose.leftWrist.y;
        rightWristX=result[0].pose.rightWrist.x;
        rightWristY=result[0].pose.rightWrist.y;
     console.log(leftWristX,leftWristY);
     console.log(rightWristX, rightWristY);
     difference=rightWristX-leftWristX;
     difference=Math.floor(difference);
     document.getElementById("WH_square").innerHTML=difference;
    }
   

}
