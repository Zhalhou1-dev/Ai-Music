songname=null;
rightwristx=0;
song=null;
rightwristy=0;
leftwristx=0;
leftwristy=0;
leftWristscore=0;
rightWristscore=0;
function preload(){
    songname=loadSound('music.mp3');
    songname=loadSound('Aimusic.mp3')
}
function setup(){
canvas=createCanvas(200,200);
canvas.center();
video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized!')
}
function gotPoses(results){
if (results.length>0){
console.log(results);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
leftWristscore=results[0].pose.keypoints[9].score;
rightWristscore=results[0].pose.keypoints[10].score;

console.log('Left Wrist x='+leftwristx+'Left Wrist Y='+leftwristy);
console.log('Right Wrist x='+rightwristx+'Right Wrist Y='+rightwristy);

}
}
function draw(){
    image(video,0,0,200,200);
    if (rightWristscore>0.2){
        circle(rightwristx,rightwristy,20);
        song="Music 2";
        songname.loadSound('music.mp3')
        play(songname)
        }
    fill('#ff0000');
    stroke('ff0000');
    if (leftWristscore>0.2){
        circle(leftwristx,leftwristy,20);
        song="Music 1";
            document.getElementById('song_name').innerHTML="Song Name="+songname;
    songname.loadSound('Aimusic.mp3');
play(songname)
    };
}

