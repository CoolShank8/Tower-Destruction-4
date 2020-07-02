class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          restitution:0.8,
          friction:1.0,
          density:0.1,
          isStatic: false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.r = random(255)
      this.g = random(255)
      this.b = random(255)

      this.visibility = 255

      World.add(world, this.body);
      Sprites.push(this)
    }



    Update(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y)
      rotate(angle);
      rectMode(CENTER);
      fill(this.r, this.g,this.b)
      

      if (this.body.speed < 4 )
      {
        rect(0, 0, this.width, this.height);
      }

      else 
      {
       this.visibility = this.visibility - 50
        World.remove(world, this.body)

      }

      if (this.visibility<0 && this.visibility >- 105)
      {
          Score++
       }

      pop();
    }

}