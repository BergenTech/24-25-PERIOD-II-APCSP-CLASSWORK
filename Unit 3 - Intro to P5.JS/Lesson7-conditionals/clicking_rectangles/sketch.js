let x = 100,  y = 50;
let w = 80,  h = 60;
// let rectColor = 'white'
let speed = 1;
let rectColor;
let click = 0
function setup() {
  createCanvas(400, 400);
  noStroke();
  rectColor = color(255, 0, 0);
}

function draw() {
  background(204);
  fill(rectColor);
  rect(x, y, w, h);
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    if (mouseIsPressed) {
      rectColor = color(random(256), random(256), random(256));
      speed+=0.5
      y = 50
      x= random(width-w)
      click++
    }
  }
  y += speed;
  //if box moves down beyond 600
  if(y>height+h){
    y = 50
    x= random(width-w)
  }
  textSize(50)
  text(click, 250,100)
}
