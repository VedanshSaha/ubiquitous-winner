class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.groundObject = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.groundObject);
  }
  display() {
    var pos = this.groundObject.position;
    rectMode(CENTER)
    push()
    noStroke();
    fill("lime");
    rect(pos.x, pos.y, this.width, this.height);pop()
  }
}
