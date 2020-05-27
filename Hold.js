class Hold {
    constructor(x,y,width,height,angle) {
      var options = {
          isStatic: true,
          'friction':1,
          'density':1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.angle;
      rectMode(CENTER);
      fill(255);
      rotate(angle);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
