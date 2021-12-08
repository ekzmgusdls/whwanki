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

let controller = {
    // range : 0.00 ~ 0.20
    gravitySpeed: 0,
    // range : 0.00 ~ 1.00
    restitution: 0.2,
};

var url = 'https://raw.githubusercontent.com/progers/pathseg/master/pathseg.js';

loadGitHubScript(url).then(function () {
    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Events = Matter.Events,
        Svg = Matter.Svg,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse;

    // create an engine
    var engine = Engine.create(),
        world = engine.world;

    // create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            // showAngleIndicator: true,
        },
    });
    var ground = Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + 50,
        window.innerWidth,
        100,
        {
            isStatic: true,
        }
    );

    var leftWall = Bodies.rectangle(
        -50,
        window.innerHeight / 2,
        100,
        window.innerHeight,
        {
            isStatic: true,
        }
    );
    var rightWall = Bodies.rectangle(
        window.innerWidth + 50,
        window.innerHeight / 2,
        100,
        window.innerHeight,
        {
            isStatic: true,
        }
    );

    var topWall = Bodies.rectangle(
        window.innerWidth / 2,
        0 - 50,
        window.innerWidth,
        100,
        {
            isStatic: true,
        }
    );
    var vertexSets = [];
    let a;
    let b;

    $('#svg')
        .find('.st0')
        .each(function (i, path) {
            // vertexSets.push(Svg.pathToVertices(path, 100));

            a = Bodies.fromVertices(
                render.canvas.width / render.canvas.width,
                render.canvas.height / 2,
                Svg.pathToVertices(path, 10),
                {
                    angle: 1.5,
                    render: {
                        fillStyle: '#232323',
                    },
                }
            );

            b = Bodies.fromVertices(600, 800, Svg.pathToVertices(path, 10), {
                angle: 1.7,
                render: {
                    fillStyle: '#232323',
                },
            });

            let c = Bodies.fromVertices(50, 380, Svg.pathToVertices(path, 10), {
                angle: 1.7,
                render: {
                    fillStyle: '#232323',
                },
            });

            let d = Bodies.fromVertices(
                1200,
                700,
                Svg.pathToVertices(path, 10),
                {
                    angle: 1.7,
                    render: {
                        fillStyle: '#232323',
                    },
                }
            );

            let e = Bodies.fromVertices(
                800,
                150,
                Svg.pathToVertices(path, 10),
                {
                    angle: 0,
                    render: {
                        fillStyle: '#232323',
                    },
                }
            );
            vertexSets.push(a, b, c, d, e);
        });

    $('#svg')
        .find('.cls-1')
        .each(function (i, path) {
            // vertexSets.push(Svg.pathToVertices(path, 100));
            var v = Bodies.fromVertices(
                300 + i * 900,
                400 + i * 400,
                Svg.pathToVertices(path, 10),
                {
                    render: {
                        fillStyle: '#82161E',
                    },
                    restitution: 0,
                },
                true
            );
            vertexSets.push(v);

            // World.add(engine.world, v);
        });
    vertexSets.push(ground);
    vertexSets.push(leftWall);
    vertexSets.push(rightWall);
    vertexSets.push(topWall);

    let rocks = [];

    $('#svg')
        .find('.rocks')
        .each(function (i, path) {
            // vertexSets.push(Svg.pathToVertices(path, 100));
            var v = Bodies.fromVertices(
                0 + i * Math.random() * 300,
                100 + i * 200,
                Svg.pathToVertices(path, 10),
                {
                    render: {
                        fillStyle: '#232323',
                    },
                    restitution: 0.1,
                    // frictionAir: Math.random(),
                    // isStatic: Math.floor(Math.random * 10) < 5 ? false : true,
                },
                true
            );
            rocks.push(v);
        });

    // add all of the bodies to the world
    World.add(world, vertexSets);
    World.add(world, rocks);
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
        });

    World.add(world, mouseConstraint);
    console.log(mouseConstraint);
    mouseConstraint.constraint.render.visible = false;
    let counter = 0;
    let aCounter = 0;
    Events.on(engine, 'beforeUpdate', function (event) {
        counter += 0.014;
        aCounter += 0.01;

        if (counter < 0) {
            return;
        }

        var px = 400 + 100 * Math.sin(counter);
        var tx = 700 + 300 * Math.sin(counter);
        var mx = 200 + (200 * Math.random() * Math.sin(counter)) / 10;
        var xx = 1000 + 50 * Math.sin(aCounter);
        var xxx = 1000 + 50 * Math.sin(aCounter * 2);
        var wx = 400 + 50 * Math.sin(counter);
        var test = 100 * Math.sin(counter);

        // body is static so must manually update velocity for friction to work
        // Body.setVelocity(a, { x: px - a.position.x, y: 0 });
        // Body.setPosition(vertexSets[5], {
        //     x: tx,
        //     y: vertexSets[5].position.y,
        // });
        // Body.setPosition(vertexSets[6], {
        //     x: xx,
        //     y: wx,
        // });
        // Body.setPosition(rocks[4], {
        //     x: xx / 5,
        //     y: wx / 5,
        // });
        Body.setPosition(rocks[0], {
            x: xxx - 500,
            y: wx / 2 + 600,
        });
        Body.setPosition(rocks[6], {
            x: xx + 300,
            y: wx,
        });
        // Body.setPosition(rocks[9], {
        //     x: xx - 400,
        //     y: wx + 50,
        // });
        Body.setPosition(rocks[2], {
            x: xx - 200,
            y: wx / 2 + 100,
        });
    });

    render.mouse = mouse;
    let i = 0;
    // setInterval(() => {
    //     i = i + 1;
    //     console.log(i);
    //     if (i % 2 == 0) {
    //         engine.world.gravity.y = -Math.random() / 50;
    //     } else {
    //         engine.world.gravity.y = Math.random() / 50;
    //     }
    //     Matter.Engine.update(engine);
    // }, 3000);

    // run the engine
    Matter.Runner.run(engine);
    engine.world.gravity.y = 0;
    // run the renderer

    render.options.wireframes = false;
    render.options.background = '#769298';

    Render.run(render);
});
