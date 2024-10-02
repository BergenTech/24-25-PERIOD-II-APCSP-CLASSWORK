function setup(){
    createCanvas(400,400)
}

function draw(){
    background(0)
    //diagonal top-left to bottom-right
    let x = 50, y = 50
    while(x<width){
        ellipse(x, y, 40, 40)
        x+=50
        y+=50
    }
    //diagonal top-right to bottom-left
    x = 350, y = 50
    while(x>=50){
        ellipse(x,y,40,40)
        x-=50
        y+=50
    }

}