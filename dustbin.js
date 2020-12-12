

class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      
      this.width = 200;
      this.height = 213;
      this.thickness=20;
      this.leftbody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
      this.rightbody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
      this.bottombody = Bodies.rectangle(x,y,this.width,this.thickness,options);
     
      this.Image=loadImage("dustbingreen.png")
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
      World.add(world, this.bottombody);
    }
    display(){
      var pos1 =this.leftbody.position;
      var pos2 =this.rightbody.position;
      var pos3 =this.bottombody.position;
      push ();
      translate(pos1.x,pos1.y); 
      rotate (this.leftbody.angle)
      rectMode(CENTER);
      fill("yellow");
      //rect(pos.x, pos.y, this.width, this.height);
     // image(this.Image,0,0,this.width,this.height)
     pop ();
     push ();
      translate(pos2.x,pos2.y); 
      rotate (this.rightbody.angle)
      rectMode(CENTER);
      fill("yellow");
      //rect(pos.x, pos.y, this.width, this.height);
     // image(this.Image,0,0,this.width,this.height)
     pop ();
     push ();
      translate(pos3.x,pos3.y+10); 
      rotate (this.bottombody.angle)
      rectMode(CENTER);
      fill("yellow");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode (CENTER)
      image(this.Image,0,-this.height/2,this.width,this.height)
     pop ();
    }
  };