let y1 = 50, y2 = 200
function setup() {
  createCanvas(500, 500)
}
function draw() {
  background(0);
  let x = 50//initialize the variable to 50
  while (width > x) { 
    fill(255, 0, 0)//add a red fill
    ellipse(x, y1, 80) 
    fill(0, 255, 0)//add a green fill
    ellipse(x, y1, 60)
    fill(0, 0, 255);//add a blue fill
    ellipse(x, y1, 40)
    fill(255, 0, 255)//add a purple fill
    ellipse(x, y1, 20)
    x = x + 100
  }
  // second row
  for(x = 50; width > x; x+=100){
    fill('yellow')
    circle(x, y2, 80)
    fill('blue')
    circle(x, y2, 60)
    fill('white')
    circle(x, y2, 40)
    fill('red')
    circle(x, y2, 20)
  }

}







