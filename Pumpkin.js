class Pumpkin {
    constructor(x, y) {
      var options = {
        'density':5,
        'friction': 1.3,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 60;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('brown')
      fill('orange')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  