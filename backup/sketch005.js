/// <reference path="./p5.global-mode.d.ts" />
let canvas1 = document.getElementById("canvas1");

let enemyImage1;

class Enemy1 {
  constructor() {
    this.x = width / 2;
    this.y = height / 2 - 200;
    this.speed = random(-2, 2);
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.w = this.spriteWidth / 2.5;
    this.h = this.spriteHeight / 2.5;
    this.frame = 0;
    this.flapSpeed = floor(random(1, 4));
  }

  display() {
    image(
      enemyImage1,
      this.x,
      this.y,
      this.h,
      this.w,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight
    );
  }

  update() {
    if (frameCount % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }

    this.x += this.speed;
    if (this.x < 0 || this.x > width - 70) {
      this.speed *= -1;
    }

    this.y += this.speed;
    if (this.y < 0 || this.y > height - this.h) {
      this.speed *= -1;
    }
  }
}

let enemies = [];
let countEnemies = 10;

function preload() {
  enemyImage1 = loadImage("./images/enemy1.png");
}

function setup() {
  // put setup code here
  createCanvas(500, 1000, canvas1, canvas1.width, canvas1.height);
  for (let i = 0; i < countEnemies; i++) {
    enemies.push(new Enemy1());
  }
}

function draw() {
  background(255);
  for (let enemy of enemies) {
    enemy.display();
    enemy.update();
  }
}
