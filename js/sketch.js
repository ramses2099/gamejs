/// <reference path="./p5.global-mode.d.ts" />
/// <reference path="./matter.d.ts" />
const { Engine, Body, Bodies, Composite, Vector } = Matter;

let engine;
let balls = [];
let ground;
let colorPallete = ["#4B5945", "#66785F", "#91AC8F", "#B2C9AD"];

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
// Circle Class
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(random(colorPallete));

    this.body = Bodies.circle(this.x, this.y, this.r);
    let magnitude = 5;
    let velocity = Vector.create(
      random(-magnitude, magnitude),
      random(-magnitude, magnitude)
    );
    Body.setVelocity(this.body, velocity);

    Composite.add(engine.world, this.body);
  }

  draw() {
    fill(this.color);
    ellipse(this.body.position.x, this.body.position.y, this.r * 2, this.r * 2);
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

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
  }

  Engine.update(engine);
}

function mousePressed() {
  balls.push(new Circle(mouseX, mouseY, random(10, 20)));
}
