let thickness = 15, gap = 50
let randomColor
function setup(){
    createCanvas(600,600)
    ellipseMode(RADIUS)
    frameRate(10)
    randomColor = color(random(256),random(256),random(256))
}

function draw(){
    background(220)
    let radius = 300
    // translate(width/2, height/2)
    // ellipse(0,0,radius)
    // translate(100,50)
    // ellipse(0,0,radius)
    while(radius>=50){
        strokeWeight(thickness)
        // stroke('red')
        stroke(0)
        randomColor = color(random(256),random(256),random(256))
        // check the distance between mouse pointer and center of canvas
        let distance = dist(width/2, height/2, mouseX, mouseY)
        if(distance < radius){
            fill('yellow') //if on the circle
        }else {
            fill('red') //otherwise
        }
        ellipse(width/2,height/2,radius)
        radius = radius - gap
    }

}