let bg
let x
function setup() {
  createCanvas(400, 400);
  x = width/2
  // bg = prompt("Pick a color: ")

  // if(!isNaN(bg)){
  //   bg = parseInt(bg)
  // }
}

function draw() {
  // background(bg);
  background(200);
  textSize(100)
  textAlign(CENTER, CENTER)
  text("BT",x, height/2)
  x += 5
}
