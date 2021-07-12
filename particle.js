class Particle {
    constructor(x, y, r) {
        var options={
            restitution:0.5
        }
        //console.log("Particle.constructor... this.x:" + x + " this.y:" + y + " this.r:" + r)
        this.radius = r;
        this.body = Bodies.circle(x, y, this.radius,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }
}
