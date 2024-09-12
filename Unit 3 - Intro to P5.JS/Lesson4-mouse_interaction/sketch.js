function setup(){
    createCanvas(400,400)
    // frameRate(1)
}
function draw(){
    background(25,125,150,125)
    // console.log(frameCount)
    // fill(200,200,20)
    // ellipse(width/2,height/2,75,75)
    // ellipse(mouseX,mouseY,75,75)

    // let's draw a kite
    strokeWeight(3)
    fill(0,0,255)
    quad(mouseX,mouseY-60,mouseX+60,mouseY,mouseX,mouseY+120,mouseX-60,mouseY)
    // vertical line
    line(mouseX,mouseY-60,mouseX,mouseY+120)
    // horizontal line
    line(mouseX-60,mouseY,mouseX+60,mouseY)
    // tail
    line(mouseX,mouseY+120,mouseX+random(40,70),mouseY+180)
}