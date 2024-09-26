let x,y,w,h
function setup(){
    createCanvas(400,400)
    x = width/2
    y = 90, w =100, h =50
}
function draw(){
    background(50,120,69)
    rectMode(CENTER)
    //draw the box
    fill(255)
    rect(x,y,w,h)
    
    //buttons
    fill(0)
    circle(150,200,30) //left button
    textAlign(CENTER)
    textSize(20)
    fill(255)
    text('<', 150, 207)
    fill('red')
    circle(250,200,30) //right button
    fill(255)
    text('>', 250,207)
    // if mouse pressed on the buttons
    if(dist(mouseX, mouseY, 150,200)<15){
        if(mouseIsPressed){
            x -= 1
        }
    }else if(mouseIsPressed && dist(mouseX, mouseY, 250,200)<15){
            x++
    }
    // if key is pressed
    if(keyIsPressed && key == 'u'){ //up
        y-=1
    }else if(keyIsPressed && key == 'd'){ //down
        y+=1
    }
    else if(keyIsPressed && key == 'b'){ //down
        w++
        h++
    }
    else if(keyIsPressed && key == 'r'){ //down
        w=100
        h=50
    }
}