function Box(x, y, w, h) {
    var options = {
        friction: 1,
        restitution: 0.5,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    // 보이도록 하기 위해서 작성한다.

    this.show = function () {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);

        pop();
    };
}
