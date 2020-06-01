class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0.1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //push();
    translate(pos.x,pos.y);
    /*rotateMode(RADIANS);                                                 
  rotate(this.body.angle);*/
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
   //pop();
  }
};
