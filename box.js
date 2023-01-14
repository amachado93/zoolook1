class Box {
  
    constructor(){
      let x = random (-150, width*1.25)
      // let y = random(-100, -10)
      let y = random(height+10, height+50)
      this.pos = createVector(x, y);
      this.vel = createVector(0, -1.75);
      this.acc = createVector();
      this.xOff = createVector(-1, 0);
    }
    
    update() {
      this.pos.add(this.vel)
      this.pos.add(this.xOff)
      
      
    }
    
    render(){
      fill(120, 180, 240)
      noStroke()
      rect(this.pos.x, this.pos.y, 20, 20 )
      
    }
    
    offScreen(){
      return (this.pos.y < 0 + this.r)  
    }
    
  }