function setup() {
    createCanvas(400, 400);
}

function draw(){
    let redLight = 'white'
    let yellowLight = 'white'
    let greenLight = 'white'
    background(0)
    rectMode(CENTER)
    strokeWeight(3)
    fill(255)
    rect(width/2, height/2, 100, 200)
    //check the distance and change the colors
    if(dist(mouseX, mouseY,width/2, height/2-50 )<20){
        redLight = 'red'
    }else if(dist(mouseX, mouseY,width/2, height/2 )<20){
        yellowLight = 'yellow'
    }else if(dist(mouseX, mouseY,width/2, height/2+50 )<20){
        greenLight = 'green'
    }
    //the lights
    fill(redLight)
    ellipse(width/2, height/2-50, 40)
    fill(yellowLight)
    ellipse(width/2, height/2, 40)
    fill(greenLight)
    ellipse(width/2, height/2+50, 40)
}