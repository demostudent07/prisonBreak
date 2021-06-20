var prisoner, pimg1, pimg2;
var f1, f2, fp1, fp2;
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16;
var jail, jb, jail2;
var police1, police2, police3, poimg1, poimg2, poimg3, poimg4, poimg5, poimg6;
var key1, key2, kimg1, kimg2;
var goldenkey, gate, gg, gk, og;
var edges;
var invisiblewall;
var gameover, bg, back;
var h1, h2, h3, heartImg, win;
var gameState = "start";
var lives = 3;
var score = 0;
var flag = false;

function preload() {
  pimg1 = loadImage("images/prisoner1.png");
  pimg2 = loadImage("images/prisoner2.png");
  fp1 = loadImage("images/pri1.png");
  fp2 = loadImage("images/pri2.png")
  jb = loadImage("images/bar.png")
  poimg1 = loadImage("images/g1.png");
  poimg2 = loadImage("images/gb1.png");
  poimg3 = loadImage("images/gr1.png");
  poimg4 = loadImage("images/gl1.png");
  poimg5 = loadImage("images/gr2.png");
  poimg6 = loadImage("images/gl2.png");
  kimg1 = loadImage("images/key1.png");
  gk = loadImage("images/key.png");
  gg = loadImage("images/gate.png");
  og = loadImage("images/opengate.png");
  heartImg = loadImage("images/heart.png");
  gameover = loadImage("images/go.png");
  bg = loadImage("images/back.jpeg");
  win = loadImage("images/win.jpeg");
}

function setup() {
  createCanvas(600, 500);
  back = createSprite(300, 250, 600, 500);
  back.addImage('bakg', bg)
  //back.scale=0.3
  back.visible = false;

  prisoner = createSprite(560, 40, 20, 20);
  prisoner.debug = false;
  prisoner.setCollider("circle", 0, 0, 250);
  prisoner.addImage('ps', pimg2);
  prisoner.scale = 0.09;

  f1 = createSprite(20, 30, 10, 10)
  f1.addImage('furendo', fp1);
  f1.scale = 0.15

  f2 = createSprite(570, 470, 10, 10)
  f2.addImage('furend', fp2);
  f2.scale = 0.15

  jail = createSprite(565, 470, 10, 10);
  jail.addImage('bacha', jb);
  jail.scale = 0.09

  jail2 = createSprite(30, 25, 10, 10);
  jail2.addImage('bachao', jb);
  jail2.scale = 0.09

  h1 = createSprite(280, 10, 10, 10)
  h1.addImage('h11', heartImg);
  h1.scale = 0.03

  h2 = createSprite(300, 10, 10, 10)
  h2.addImage('h12', heartImg);
  h2.scale = 0.03

  h3 = createSprite(320, 10, 10, 10)
  h3.addImage('h13', heartImg);
  h3.scale = 0.03

  police1 = createSprite(460, 170, 10, 10)
  police1.addImage('danda', poimg1)
  police1.scale = 0.7
  police1.debug = false

  police2 = createSprite(230, 460, 10, 10)
  police2.addImage('police', poimg5)
  police2.scale = 0.7

  police3 = createSprite(205, 340, 10, 10)
  police3.addImage('poli', poimg4)
  police3.scale = 0.7

  key1 = createSprite(135, 430, 10, 10);
  key1.addImage('chabi', kimg1);
  key1.scale = 0.04

  key2 = createSprite(30, 110, 10, 10);
  key2.addImage('chab', kimg1);
  key2.scale = 0.04

  gate = createSprite(40, 470, 10, 10);
  gate.addImage('gold', gg);
  gate.scale = 0.09;
  next = createSprite(278, 390, 90, 30)
  next.shapeColor = "white"

  w1 = createSprite(510, 100, 10, 300)
  w2 = createSprite(510, 335, 175, 10)
  w3 = createSprite(420, 365, 10, 70)
  w4 = createSprite(380, 395, 70, 10)
  w5 = createSprite(340, 325, 10, 150)
  w6 = createSprite(375, 250, 80, 10)
  w7 = createSprite(410, 185, 10, 140)
  w8 = createSprite(330, 115, 170, 10)
  w9 = createSprite(30, 65, 80, 10)
  w10 = createSprite(90, 370, 10, 300)
  w11 = createSprite(140, 380, 100, 10)
  w12 = createSprite(190, 390, 10, 30)
  w13 = createSprite(170, 150, 10, 300)
  w14 = createSprite(240, 185, 150, 10)
  w15 = createSprite(565, 430, 70, 10)
  w16 = createSprite(300, 0, 600, 10)

  invisiblewall = createSprite(450, 485, 10, 30)

  goldenkey = createSprite(560, 40, 10, 10);
  goldenkey.addImage('sona', gk);
  goldenkey.scale = 0.06
  goldenkey.visible = false;

  gate.visible = false;
  w16.visible = false;
  w15.visible = false;
  w14.visible = false;
  w14.visible = false;
  w13.visible = false;
  w12.visible = false;
  w11.visible = false;
  w10.visible = false;
  w9.visible = false;
  w8.visible = false;
  w7.visible = false;
  w6.visible = false;
  w5.visible = false;
  w4.visible = false;
  w3.visible = false;
  w2.visible = false;
  w1.visible = false;
  key1.visible = false;
  key2.visible = false;
  invisiblewall.visible = false;
  police1.visible = false;
  police2.visible = false;
  police3.visible = false;
  f1.visible = false;
  f2.visible = false;
  prisoner.visible = false;
  h1.visible = false;
  h2.visible = false;
  h3.visible = false;
  jail.visible = false;
  jail2.visible = false;
  w16.visible = false;

  guardMovement();
}

function draw() {
  background("#EAE2B6");
  edges = createEdgeSprites()
  textFont("comic sans ms");
  drawSprites();
  text(mouseX + "," + mouseY, mouseX, mouseY)
  if (gameState === "start") {
    fill("red")
    textSize(18)
    text(" Next ", 260, 396)

    //GAME STORY 
    fill("#03256C")
    textSize(20)
    text(" Write your game story here ", 100, 120)
    text(" instructions to play ??", 160, 190)

    if (mousePressedOver(next)) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    back.visible = true;
    gate.visible = true;
    prisoner.visible = true;
    key1.visible = true;
    key2.visible = true;
    f1.visible = true;
    f2.visible = true;
    police1.visible = true;
    police2.visible = true;
    police3.visible = true;
    h1.visible = true;
    h2.visible = true;
    h3.visible = true;
    jail.visible = true;
    jail2.visible = true;
    w15.visible = true;
    w14.visible = true;
    w14.visible = true;
    w13.visible = true;
    w12.visible = true;
    w11.visible = true;
    w10.visible = true;
    w9.visible = true;
    w8.visible = true;
    w7.visible = true;
    w6.visible = true;
    w5.visible = true;
    w4.visible = true;
    w3.visible = true;
    w2.visible = true;
    w1.visible = true;
    next.visible = false;

    textSize(20)
    fill("red")
    text("Keys:" + score, 410, 20);
    fill(255, 0, 0);


    if (police1.isTouching(w2)) {
      police1.addImage('danda', poimg2)
    }
    if (police1.isTouching(w16)) {
      police1.addImage('danda', poimg1)
    }
    if (police2.isTouching(w10)) {
      police2.addImage('police', poimg5)
    }
    if (police2.isTouching(invisiblewall)) {
      police2.addImage('police', poimg6)
    }
    if (police3.isTouching(w10)) {
      police3.addImage('poli', poimg3)
    }
    if (police3.isTouching(w5)) {
      police3.addImage('poli', poimg4)
    }
    if (prisoner.isTouching(key1)) {
      score += 1
      key1.destroy()

      f1.destroy();
    }
    if (prisoner.isTouching(key2)) {
      score += 1
      key2.destroy()
      f2.destroy();

    }
    if (score === 2) {
      goldenkey.visible = true;
      if (prisoner.isTouching(goldenkey)) {
        flag = true;
        gate.addImage('gold', og);
        goldenkey.destroy();
      }
    }

    if (prisoner.isTouching(police1) || prisoner.isTouching(police2) || prisoner.isTouching(police3)) {
      lives -= 1
      //gameState = "resetKeys"
      prisoner.x = 560
      prisoner.y = 40
    }
    if (prisoner.isTouching(gate) && flag === true) {
      police1.destroy();
      police2.destroy();
      police3.destroy();
      winner = createSprite(300, 250, 10, 10)
      winner.addImage('enk', win);
      text("Thanks for playing the game", 220, 270);
    }

    bounce();
    prisonerControls();
    hearts();

  }
}
function bounce() {
  edges = createEdgeSprites()
  prisoner.bounceOff(w1)
  prisoner.bounceOff(w2)
  prisoner.bounceOff(w3)
  prisoner.bounceOff(w4)
  prisoner.bounceOff(w5)
  prisoner.bounceOff(w6)
  prisoner.bounceOff(w7)
  prisoner.bounceOff(w8)
  prisoner.bounceOff(w9)
  prisoner.bounceOff(w10)
  prisoner.bounceOff(w11)
  prisoner.bounceOff(w12)
  prisoner.bounceOff(w13)
  prisoner.bounceOff(w14)
  prisoner.bounceOff(w15)
  police3.bounceOff(w5)
  police3.bounceOff(w10)
  police1.bounceOff(w2);
  police2.bounceOff(w10)
  police2.bounceOff(invisiblewall)
  prisoner.bounceOff(edges)
  police1.bounceOff(w16)
  police3.bounceOff(edges)
  police1.bounceOff(edges);
  police2.bounceOff(edges)
}
function prisonerControls() {
  if (keyDown("w")) {
    prisoner.y -= 5
}
if (keyDown("s")) {
    prisoner.y += 5
}
if (keyDown("a")) {
    prisoner.x -= 5
    prisoner.addImage('ps', pimg2);
}
if (keyDown("d")) {
    prisoner.x += 5
    prisoner.addImage('ps', pimg1);
}
}
function guardMovement() {
  police1.velocityX = 0
  police1.velocityY = 2
  police2.velocityX = 2
  police2.velocityY = 0
  police3.velocityX = -2
  police3.velocityY = 0
}
function hearts() {
  if (lives === 2) {
    h3.destroy();
  }
  if (lives === 1) {
    h2.destroy();
  }
  if (lives === 0) {
    h1.destroy();
    police1.setVelocity(0, 0)
    police2.setVelocity(0, 0)
    police3.setVelocity(0, 0)
    prisoner.setVelocity(0, 0)
    over = createSprite(300, 250)
    over.addImage('over', gameover);
    over.scale = 0.8
  }

}