class Particle {
    constructor(x, y, r) {
        //console.log("Particle.constructor... this.x:" + x + " this.y:" + y + " this.r:" + r)
        this.radius = r;
        this.body = Bodies.circle(x, y, this.radius);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        circle(pos.x, pos.y, this.radius);
    }
}