function setup(){
    createCanvas(400,400)
}

function draw(){
    background(127)
    stroke(0)
    strokeWeight(5)
    line(width/2,0,width/2,height)
    stroke(255,0,0) //stroke('red')
    line(0,height/2,width,height/2)
    strokeWeight(10)
    line(width/2,0,width,height/2)
    line(0,height/2, width/2,height)
    strokeWeight(15)
    stroke('yellow')
    line(0,0,width,height)
    line(width,0,0,height)
}
