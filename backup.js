function doSomething() {
    // var Engine = Matter.Engine,
    //     World = Matter.World,
    //     Bodies = Matter.Bodies,
    //     Svg = Matter.Svg,
    //     Vertices = Matter.Vertices;
    // var engine;
    // var world;
    // var boxes = [];
    // var ground;
    // let vertexSets = [];
    // let testSvg;
    // function setup() {
    //     createCanvas(window.innerWidth, window.innerHeight);
    //     engine = Engine.create();
    //     world = engine.world;
    //     Engine.run(engine);
    //     var options = {
    //         isStatic: true,
    //     };
    //     ground = Bodies.rectangle(width / 2, height, width, 50, options);
    //     leftWall = Bodies.rectangle(0, height / 2, 5, height, options);
    //     rightWall = Bodies.rectangle(width, height / 2, 5, height, options);
    //     document.querySelectorAll('#test-rock path').forEach((path, i) => {
    //         vertexSets.push(Svg.pathToVertices(path, 100));
    //     });
    //     testSvg = Bodies.fromVertices(0, 0, vertexSets);
    //     console.log(testSvg);
    //     console.log(vertexSets);
    //     // $('#svg').find('path').each(function(i, path){
    //     //     // vertexSets.push(Svg.pathToVertices(path, 100));
    //     //     var v = Bodies.fromVertices(100+(i*80), 80, Svg.pathToVertices(path, 20), {
    //     //       render: {
    //     //         fillStyle: color,
    //     //         strokeStyle: color
    //     //       }
    //     //     }, true);
    //     //   console.log(v)
    //     //   vertexSets.push(v);
    //     //   // World.add(engine.world, v);
    //     // });
    //     // vertexSets.push(ground)
    //     // // add all of the bodies to the world
    //     // World.add(engine.world, vertexSets);
    //     World.add(world, ground);
    //     World.add(world, leftWall);
    //     World.add(world, rightWall);
    //     World.add(world, testSvg);
    // }
    // function mouseDragged() {
    //     boxes.push(new Box(mouseX, mouseY, random(10, 500), random(10, 100)));
    // }
    // function draw() {
    //     background(33);
    //     noStroke(255);
    //     fill(0);
    //     for (var i = 0; i < boxes.length; i++) {
    //         boxes[i].show();
    //     }
    //     rectMode(CENTER);
    //     fill(255);
    //     rect(ground.position.x, ground.position.y, width, 50);
    //     rectMode(CENTER);
    //     fill(255);
    //     rect(leftWall.position.x, leftWall.position.y, 30, height);
    //     rect(rightWall.position.x, rightWall.position.y, 30, height);
    // }
    // console.log(document.querySelector('#test-rock'));
}
