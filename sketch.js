let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose;
let skeleton;

function setup()
{
    createCanvas(800 , 500);
    console.log('setup function');
    capture = createCapture(VIDEO);
    capture.hide();
    posenet = ml5.poseNet(capture , modelLoaded);
    posenet.on('pose',receivedPoses);
}

function receivedPoses(poses)
{
    console.log(poses);

    if(poses.length>0)
    {
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
    }
    console.log(noseX + " " + noseY);
}


function modelLoaded()
{
    console.log('model has loaded');
}


function draw()
{
    image(capture,0,0);
    fill(0,255,0);

    if(singlePose)
        {
            for(let i=0;i<singlePose.keypoints.length;i++)
                {
                    ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,20);
                }

            stroke(255,255,255);
            strokeWeight(3);
            for(let j=0;j<skeleton.length;j++)
                {
                    line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
                }

        }

}
