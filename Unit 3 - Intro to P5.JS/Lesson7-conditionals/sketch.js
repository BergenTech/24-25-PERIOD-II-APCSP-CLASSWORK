function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(3)
  line(width/2,0,width/2,height)
  line(0,height/2, width, height/2)
  rectMode(CENTER)
  if(mouseY<height/2){
    fill('red')
  }else {
    fill('blue')
  }

  //draw a rectangle if mouseX is greater than half of the width
  if(mouseX>width/2){
    rect(width/2, height/2, 150)
  }
  else {//otherwise draw a circle
  circle(width/2, height/2,150)
  }

  fill('yellow')
  //upper left corner
  if(mouseX<width/2 && mouseY<height/2){
    circle(width/4, height/4,50)
  }
  //right bottom corner
  else if(mouseX>width/2 && mouseY>height/2) {
    circle(3/4*width,3/4*height,50)
  }
}
