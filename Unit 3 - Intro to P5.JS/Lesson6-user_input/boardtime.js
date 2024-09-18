let x = 50, y = 100, r = 50
let speed = 0
function setup() {
  createCanvas(500, 200)
}
function draw() {
  background(220)
  fill(0)
  ellipse(x, y, r)
  //move the box
  x += speed
  r += speed / 5
}
function keyPressed() {
  speed += 3
}
function mousePressed() {
  x = 50, y = 100, r = 50
  speed = 0
}
