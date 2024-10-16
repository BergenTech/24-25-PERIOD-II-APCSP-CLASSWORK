
let length = 40
let isBlue = true
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let x = 0; x < width; x += length) {
    for (let y = 0; y < height; y += length) {
      if(isBlue){
        fill("blue")
      }else {
        fill('red')
      }
      rect(x, y, length, length)
      //once a square is drawn
      isBlue = !isBlue
    }
    isBlue = !isBlue
  }
}
