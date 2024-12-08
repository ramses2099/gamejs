/// <reference path="./p5.global-mode.d.ts" />
let canvas1 = document.getElementById("canvas1");

let bgImge, beetlegImge, playergImge, playerjetsgImge;
let player;

class Player {
  constructor(x, y, w, h) {
    this.scale = 0.5;
    this.w = 140 * this.scale; //560 , 140
    this.h = 120 * this.scale; // 120
    this.spriteWidth = 140;
    this.spriteHeight = 120;
    this.x = width / 2;
    this.y = height - this.h;
  }
  draw() {
    rectMode(CENTER);
    noFill();
    rect(this.x, this.y, this.w, this.h);
    imageMode(CENTER);
    image(
      playergImge,
      this.x,
      this.y,
      this.w,
      this.h,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight
    );
  }
}

function preload() {
  // preload images
  bgImge = loadImage("./images/background.png");
  beetlegImge = loadImage("./images/beetlemorph.png");
  playergImge = loadImage("./images/player.png");
  playerjetsgImge = loadImage("./images/player_jets.png");
}

function setup() {
  // put setup code here
  createCanvas(500, 700, canvas1);
  player = new Player();
}

function draw() {
  background(255);
  // background
  image(bgImge, 0, 0);
  player.draw();
}
