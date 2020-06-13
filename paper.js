class Paper extends BaseClass {
    constructor(x, y){
      super(x,y,100,90);
      this.image = loadImage("paper.png");
    }
  
  
   move(){
       this.body.position.y = this.body.position.y - 0.9;
       
   }
   move2(){
    this.body.position.x = this.body.position.x + 0.8;
   }
   move3(){
    this.body.position.x = this.body.position.x - 0.9;
    
}
move4(){
 this.body.position.y = this.body.position.y + 0.8;
}
  
  };
