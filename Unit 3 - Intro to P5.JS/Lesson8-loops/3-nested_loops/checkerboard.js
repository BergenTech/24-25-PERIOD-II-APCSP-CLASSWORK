let length = 40;
let isBlue = true; // Keep the boolean variable

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw the squares directly in the draw loop
  for (let y = 0; y < height; y += length) {
    for (let x = 0; x < width; x += length) {
      // Determine color based on the current position and mouse state
      if (mouseIsPressed && mouseX > x && mouseX < x + length && mouseY > y && mouseY < y + length) {
        fill("black"); // Change to black if the mouse is pressed
      } else {
        fill(isBlue ? "blue" : "red"); // Original color
      }
      rect(x, y, length, length);
      isBlue = !isBlue; // Toggle for the next square
    }
    isBlue = !isBlue; // Toggle for the next row
  }
}
