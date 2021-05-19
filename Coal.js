class Coal {
    constructor(x, y) {
      var options = {
        'density':3,
        'friction': 0.8,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 30;
      this.height = 30;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  