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

var url = 'https://raw.githubusercontent.com/progers/pathseg/master/pathseg.js';

loadGitHubScript(url).then(function () {
    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Composites = Matter.Composites,
        Composite = Matter.Composite,
        Common = Matter.Common,
        Svg = Matter.Svg,
        Vertices = Matter.Vertices,
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
        window.innerHeight,
        window.innerWidth,
        5,
        {
            isStatic: true,
        }
    );

    var leftWall = Bodies.rectangle(
        0,
        window.innerHeight / 2,
        3,
        window.innerHeight,
        {
            isStatic: true,
        }
    );
    var rightWall = Bodies.rectangle(
        window.innerWidth,
        window.innerHeight / 2,
        3,
        window.innerHeight,
        {
            isStatic: true,
        }
    );
    var vertexSets = [];

    $('#svg')
        .find('.st0')
        .each(function (i, path) {
            // vertexSets.push(Svg.pathToVertices(path, 100));

            let a = Bodies.fromVertices(
                200,
                600,
                Svg.pathToVertices(path, 10),
                {
                    isStatic: true,
                    angle: 1.5,
                }
            );

            let b = Bodies.fromVertices(
                600,
                600,
                Svg.pathToVertices(path, 10),
                {
                    isStatic: true,
                    angle: 1.7,
                }
            );

            let c = Bodies.fromVertices(
                100,
                380,
                Svg.pathToVertices(path, 10),
                {
                    isStatic: true,
                    angle: 1.7,
                }
            );

            let d = Bodies.fromVertices(
                1200,
                700,
                Svg.pathToVertices(path, 10),
                {
                    isStatic: true,
                    angle: 1.7,
                }
            );

            let e = Bodies.fromVertices(
                800,
                150,
                Svg.pathToVertices(path, 10),
                {
                    isStatic: true,
                    angle: 0,
                }
            );
            vertexSets.push(a, b, c, d, e);
        });

    $('#svg')
        .find('.cls-1')
        .each(function (i, path) {
            // vertexSets.push(Svg.pathToVertices(path, 100));
            var v = Bodies.fromVertices(
                100 + i * 800,
                80,
                Svg.pathToVertices(path, 10),
                {
                    render: {
                        fillStyle: '#82161E',
                    },
                    restitution: 1,
                },
                true
            );
            vertexSets.push(v);

            // World.add(engine.world, v);
        });
    vertexSets.push(ground);
    vertexSets.push(leftWall);
    vertexSets.push(rightWall);

    // add all of the bodies to the world
    World.add(world, vertexSets);

    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
        });

    console.log(window.devicePixelRatio);

    World.add(world, mouseConstraint);

    render.mouse = mouse;
    // run the engine
    Matter.Runner.run(engine);

    // run the renderer

    render.options.wireframes = false;
    render.options.background = '#769298';

    Render.run(render);

    window.addEventListener('click', (e) => Bodies.rect());
});
