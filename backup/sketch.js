/// <reference path="./p5.global-mode.d.ts" />
const { Engine, Body, Bodies, Composite, Render, Runner } = Matter;

let engine;
let render;
let runner;
let box;
let ground;
let circle;
let polygon;

function setup() {
  // put setup code here
  noCanvas();
  engine = Engine.create();
  render = Render.create({
    element: document.body,
    engine: engine,
    options: { width: 400, height: 400 },
  });

  box = Bodies.rectangle(100, 50, 50, 50);
  // Body.setAngularVelocity(box, 0.2);
  ground = Bodies.rectangle(200, 300, 400, 10, { isStatic: true });
  circle = Bodies.circle(130, 0, 20);
  Body.setAngularVelocity(circle, 0.2);
  polygon = Bodies.polygon(150, 30, 6, 50);

  Composite.add(engine.world, [box, ground, circle, polygon]);

  Render.run(render);

  runner = Runner.create();
  Runner.run(runner, engine);
}

function draw() {
  // put drawing code here
  background(220);
}
