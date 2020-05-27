class BaseClass2{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.ellipse(x,y,radius);
        this.x = x;
        this.y = y;
        this.radiusX = radius;
        this.radiusY = radius;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.radiusX,this.radiusY);
        pop();
      }
}