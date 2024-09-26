let x,y
function setup() {
  createCanvas(400, 400)
  x= width/2, y=height/2
}

function draw() {
  background(220)
  strokeWeight(3)
  circle(x,y,100)
  //drag the mouse
  if(mouseIsPressed && dist(mouseX,mouseY,x,y)<50){
    // fill('yellow')
    x = x - (pmouseX-mouseX)
    y = y - (pmouseY-mouseY)
  }
}
