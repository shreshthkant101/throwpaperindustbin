class DustBin extends BaseClass {
    constructor(x, y, width, height){
    var options ={
        isStatic: false
    }
      super(x,y,width,height);
      this.image = loadImage("dustbin.png");
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    display(){
        image(this.image,this.x,this.y,this.width,this.height);
    }
  
  };
  