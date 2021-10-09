maskX=0;
maskY=0;

function preload() {
clown_nose =
loadImage('https://i.postimg.cc/63vCbnhj/521-5219414-vector-mustache-clipart-best-cartoon-mustache-transparent-background-removebg-preview-1.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initilized');
}

function gotPoses(results) {
if(results.length > 0)
{
    console.log(results);
    maskX = results[0].pose.nose.x-35;
    maskY = results[0].pose.nose.y+17;
}
}
function draw() {
image(video,0, 0, 300, 300);
image(clown_nose, maskX, maskY, 70, 50);
}

function take_snaphot(){
    save('myFilterImage.png');
}

