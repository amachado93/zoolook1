let boxes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(3, 156, 36);

   // 'bitmap' triangle
   fill(71, 209, 101)
   noSmooth();
   triangle(width+10, 0-height/4, width+10, height+10, width/4, height+10)

  // create boxes
  scale(1.5)
  
    boxes.push(new Box())
    for (var mini of boxes) {
      mini.render()
      mini.update()
    }

  
  // clear array once boxes leave screen
  for (let i = boxes.length-1; i >= 0; i--){
    if (boxes[i].offScreen()){
      boxes.splice(i, 1)
    }
  }
  

  
}