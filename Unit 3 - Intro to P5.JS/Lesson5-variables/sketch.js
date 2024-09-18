// global variables
let sunDiameter = 150
let sunX = 600, sunY =0
let sunR = 252, sunG =212, sunB=64
//cloud variables
let cloudX = 75, cloudY = 75
let cloud2X = 250, cloud2Y = 75
let cloudDiameter = 50, offset = 25
let speed = 0

function setup(){
    createCanvas(600,400)
}
function draw(){
    background(250)
    // draw the sun
    fill(sunR,sunG,sunB)
    noStroke()
    circle(sunX, sunY, sunDiameter)
    //clouds
    fill(200)
    //first cloud
    ellipse(cloudX+offset, cloudY, cloudDiameter, cloudDiameter)
    ellipse(cloudX, cloudY, cloudDiameter, cloudDiameter+offset)
    ellipse(cloudX-offset, cloudY, cloudDiameter, cloudDiameter)
    //second cloud
    ellipse(cloud2X+offset, cloudY, cloudDiameter, cloudDiameter)
    ellipse(cloud2X, cloudY, cloudDiameter, cloudDiameter+offset)
    ellipse(cloud2X-offset, cloudY, cloudDiameter, cloudDiameter)
    // move the cloud
    // cloudX = cloudX + 5
    cloudX += speed
    cloud2X -= speed/2
    //grass
    fill(124,252,0)
    rect(0,300,width,100)
}

function mousePressed(){
    speed = 5
}
function keyPressed(){
    speed = 0
}