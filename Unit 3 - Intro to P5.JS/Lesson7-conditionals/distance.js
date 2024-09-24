let x = 150, y =90
let r = 40
function setup() {
    createCanvas(400, 400)
    noStroke()
    ellipseMode(RADIUS)
}
function draw(){
    background(125)
    let d = dist(mouseX, mouseY, x, y)
    textSize(30)
    textAlign(CENTER, CENTER)
    text(d, width/2, height/2)
    if(d<r){
      fill(0)
    }else{
        fill(255)
    }
    circle(x,y,r)

}