class Drop {
    constructor(x, y){
        this.body = Bodies.circle(x, y, 5);
        World.add(world, this.body);

    }
    
    display() {
        push();
        elliplseMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        fill(blue);
        noStroke();
        ellipse(0, 0, 10, 10);
        pop();
    }
}