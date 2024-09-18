let bg
function setup() {
  createCanvas(400, 400);
  bg = prompt("Pick a color: ")

  if(!isNaN(bg)){
    bg = parseInt(bg)
  }else{
    
  }
}

function draw() {
  background(bg);
}
