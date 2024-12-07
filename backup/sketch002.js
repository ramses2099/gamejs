/// <reference path="./p5.global-mode.d.ts" />
/// <reference path="./matter.d.ts" />
const { Engine, Body, Bodies, Composite } = Matter;

let engine;
let boxes = [];
let ground;

class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h);
    Body.setAngularVelocity(this.body, 0.2);

    Composite.add(engine.world, this.body);
  }

  draw() {
    push();
    rectMode(CENTER);
    let x = this.body.position.x;
    let y = this.body.position.y;
    let angle = this.body.angle;
    translate(x, y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
// class Ground
class Ground {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {
      isStatic: true,
    });

    Composite.add(engine.world, this.body);
  }

  draw() {
    push();
    rectMode(CENTER);
    let x = this.body.position.x;
    let y = this.body.position.y;
    let angle = this.body.angle;
    translate(x, y);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

function setup() {
  // put setup code here
  createCanvas(400, 400);
  engine = Engine.create();
  ground = new Ground(200, 390, 400, 10);
}

function draw() {
  // put drawing code here
  background(220);

  ground.draw();

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].draw();
  }

  Engine.update(engine);
}

function mousePressed() {
  boxes.push(new Rect(mouseX, mouseY, 50, 50));
}
