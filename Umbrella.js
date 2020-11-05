class Umbrella {
    constructor(x, y, size) {
        var options = {
            isStatic: true
        };
        this.body = Bodies.circle(x, y, size/2, options);
        this.images = [loadImage("images/Walking Frame/walking_1.png"), loadImage("images/Walking Frame/walking_2.png"), 
                    loadImage("images/Walking Frame/walking_3.png"), loadImage("images/Walking Frame/walking_4.png"), 
                    loadImage("images/Walking Frame/walking_5.png"), loadImage("images/Walking Frame/walking_6.png"), 
                    loadImage("images/Walking Frame/walking_7.png"), loadImage("images/Walking Frame/walking_8.png")];
        World.add(world, this.body);
    }

    display() {
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y+size);
        for(var i=0; i<this.images; i++){
            if(i < 8){
                i=0;
            }
            image(this.images[i], 0, 0, 100, 400);
        }
        pop();
    }
}