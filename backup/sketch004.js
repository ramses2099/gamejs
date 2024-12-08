/// <reference path="./p5.global-mode.d.ts" />

let enemyImages;

// class Bubble
class Bubble {
  constructor() {
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.size = random(10, 20);
    this.y = random(this.size, width);
    this.x = random(this.size, height);
    this.color = color(random(255), random(255), random(255));
    this.strokeColor = color(random(255), random(255), random(255));
    this.origianlStrokeColor = this.strokeColor;
    this.strokeWeight = 2;

    this.timer = 0;
    this.interval = 1000;
    this.hit = false;
  }
  display() {
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeight);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
    image(enemyImages, this.x - 10, this.y - 10, this.size * 2, this.size * 2);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  bounce() {
    if (this.x > width - 20 || this.x < 20) {
      this.speedX *= -1;
    }

    if (this.y > height - 20 || this.y < 20) {
      this.speedY *= -1;
    }
  }

  isCollide(b) {
    let d = dist(this.x, this.y, b.x, b.y);
    if (d < this.size + b.size) {
      this.hit = true;
    }

    if (this.hit) {
      this.strokeColor = color(255, 0, 0);
    } else {
      this.strokeColor = this.origianlStrokeColor;
    }
  }
}

let bubbles = [];
let countBubbles = 20;

function preload() {
  enemyImages = loadImage("./images/enemy1.png");
}

function setup() {
  // put setup code here
  createCanvas(600, 400);

  for (let i = 0; i <= countBubbles; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(0);
  //

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].bounce();
    bubbles[i].display();
    for (let j = i + 1; j < bubbles.length; j++) {
      bubbles[i].isCollide(bubbles[j]);
    }
  }
}
