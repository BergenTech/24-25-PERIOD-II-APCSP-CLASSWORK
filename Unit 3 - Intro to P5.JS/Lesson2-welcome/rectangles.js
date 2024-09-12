function setup(){
    createCanvas(400,400)
}

function draw(){
    background(127)
    noStroke()
    fill('blue')
    rectMode(CORNER) //default
    rect(0,0,100,100)
    fill('yellow')
    rect(width-100,0,100,100)
    fill('green')
    rect(100,100,200,300)
    rectMode(CENTER)
    fill('red')
    rect(200,250,100)



}
