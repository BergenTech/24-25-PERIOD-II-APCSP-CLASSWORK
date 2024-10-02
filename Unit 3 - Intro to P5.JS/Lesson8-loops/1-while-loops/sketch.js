

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(0)
  // //draw a row of circles
  // ellipse(50, 50, 40, 40)
  // ellipse(100, 50, 40, 40)
  // ellipse(150, 50, 40, 40)
  // ellipse(200, 50, 40, 40)
  // ellipse(250, 50, 40, 40)
  // ellipse(300, 50, 40, 40)
  // ellipse(350, 50, 40, 40)

  //draw a row of circles via while loop
  // let x = 50
  // // console.log(x)
  // while(x<=350){
  //   ellipse(x,50,40,40)
  //   x+=50
  // }
  let y = 50
  // console.log(x)
  while(y<height){
    ellipse(50,y,40,40)
    y+=50
  }
  // console.log(x)
}
