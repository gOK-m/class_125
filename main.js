noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function preload(){

}

function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(600, 80);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#000000");
    fill("#ff3333");
    stroke("#0000ff");
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("posenet loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist = " + leftWristX + "right wrist = " + rightWristX + "difference = " + difference);
    }
}