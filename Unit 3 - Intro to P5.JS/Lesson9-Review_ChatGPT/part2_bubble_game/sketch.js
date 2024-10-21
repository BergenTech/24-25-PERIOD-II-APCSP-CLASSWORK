//Global variables for bubble properties
let x, y, radius, bubbleColor
//Game state variables
let speed = 2, clicks = 0
function setup() {
  createCanvas(400, 400);
  radius = 25; x = width/2; y = 100
  bubbleColor = color(random(256),random(256),random(256))
  ellipseMode(RADIUS)
}

function draw() {
  background(220)
  displayBubble()
  updateBubble()
  displayStats()
  keyPressed()

}

function displayBubble(){
  fill(bubbleColor)
  ellipse(x, y, radius)
}

function updateBubble(){
  //Move the bubble down
  y+=speed
  //if the bubble goes off the bottom, reset it
  if(y > height + radius){
    resetBubble()
  }
}

function resetBubble(){
  //reset the bubble color
  bubbleColor = color(random(256),random(256),random(256))
  //Set bubble to a random x position at the top
  x = random(radius,width-radius)
  y = -radius
}

function displayStats(){
  textSize(20)
  fill(0)
  text(`Clicks:${clicks}`, 10, 20)
  text(`Speed:${speed}`, 10, 40)
}

function keyPressed(){
  if(key === "a"){
    //move left
    x = max(x - 3, radius)
  }
  if(key === "d"){
    //move right
    x = min(x + 3, width-radius)
  }
}

function mousePressed(){
  //check if the bubble is clicked
  if(dist(mouseX, mouseY, x, y)<radius){
    //increment the clicks
    clicks++
    //increase the speed
    speed+=0.5
    //reset bubble's position
    resetBubble()
  }
}