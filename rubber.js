class Rubber {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body =Matter. Bodies.circle(x, y, radius, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      fill("blue");
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius,this.radius)
      pop();
    }
  };