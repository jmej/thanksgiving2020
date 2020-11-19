let capture;

let title1 = "You're invited to a feast ";
let title2 = "in honor of the countdown to";
let title3 = "Mariah Carey's Christmas";

let mariah;
let mariahWidth;
let potato;
let turkey;
let mashedP;
let pie;
let raisins;
let chair1, chair2, chair3, chair4;

let yum;
let buzz;

let clicked = false;

let globe;

let potatoSize;

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('xmas.mp3');
  yum = loadSound('yum.mp3');
  buzz = loadSound('buzz.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  capture = createCapture(VIDEO);
  capture.size(640, 480);


  mariah = loadImage("mariah1.png");
  potato = loadImage("potato.png");
  turkey = loadImage("alive-turkey.png");
  pie = loadImage("pumpkin-pie.png");
  raisins = loadImage("raisins.png");
  mashedP = loadImage("mashed-potatoes.png");
  comic = loadFont('comic.ttf');
  xmasfont = loadFont('Beyond Wonderland.ttf');
  chair1 = loadImage("chair1.jpg");
  chair2 = loadImage("chair2.jpg");
  chair3 = loadImage("chair3.jpg");
  chair4 = loadImage("chair4.jpg");
  ornament = loadImage("ornament-hanger.png");
  //capture.hide();
}

function draw() {

  potatoSize = width/5;
  mariahWidth = width/9;

  imageMode(CENTER);
  

  if (!clicked){

    background(255,0,0);
    lights();
    noCursor();
    translate(-width/2, -height/2);
    

    push();
    let pieX1 = width/8;
    let pieX2 = pieX1+potatoSize;
    let pieY1 = height/8*5;
    let pieY2 = pieY1+potatoSize;
    imageMode(CORNER);
    if(mouseX > pieX1 && mouseX < pieX2 && mouseY > pieY1 && mouseY < pieY2){
      image(raisins, pieX1, pieY1, potatoSize, potatoSize);
      buzz.play();
    }else{
      image(pie, pieX1, pieY1, potatoSize, potatoSize);
    }
    pop();

    push();
    fill(255);
    textFont(xmasfont, width/25);
    let lineHeight = height/8;
    text(title1+title2, 10, height/8);
    //text(title2, width/8, height/5 + lineHeight);
    textFont(xmasfont, width/15);
    text(title3, width/4, height/8 + lineHeight);
    pop();

    push();
    let turkeyTimer = millis() % 5000;
    let turkeyX = map(turkeyTimer, 0, 5000, 0, width);
    image(turkey, turkeyX, width/8, 400, 400);
    pop();

    push();
    translate(width/2, height/2);
    let timer = millis() % 5000;
    rotateY(radians(map(timer, 0, 5000, 0, 360)));
    imageMode(CENTER);
    noFill();
    //noStroke();
    texture(capture);
    // image(capture, 0, 0);
    sphere(height/8, 50);
    pop();

    push();
    imageMode(CENTER);
    translate(width/2, height/2.8, 110);
    image(ornament, 0, 0, width/14, height/10);
    pop();

    push();
    imageMode(CORNER);
    let potatoX1 = windowWidth/5*3;
    let potatoX2 = potatoX1+600;
    let potatoY1 = windowHeight/5*3;
    let potatoY2 = potatoY1+potatoSize;
    
    
    if(mouseX > potatoX1 && mouseX < potatoX2 && mouseY > potatoY1 && mouseY < potatoY2){
      image(mashedP, potatoX1, potatoY1, potatoSize, potatoSize);
      yum.play();
    }else{
      image(potato, potatoX1, potatoY1, potatoSize, potatoSize);
    }
    
    pop();

    blinkTimer = millis()%250;
    if(blinkTimer > 125){
      fill(93, 247, 37);
      textFont(comic, 50);
      text("click for chaptions!!!", width/3, height/10*9);
    }
    push();


    push();
    image(mariah, mouseX-50, mouseY, mariahWidth, mariahWidth*1.5);
    pop();
  }else{
    background(255);
    imageMode(CORNER);
    translate(-windowWidth/2, -windowHeight/2);
    image(chair1, 0, 0, windowWidth/2, windowHeight/2);
    image(chair2, windowWidth/2, 0, windowWidth/2, windowHeight/2);
    image(chair3, 0, windowHeight/2, windowWidth/2, windowHeight/2)
    image(chair4, windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);

    imageMode(CENTER);
    image(mariah, mouseX-50, mouseY, mariahWidth, mariahWidth*1.5);

    push();

    blinkTimer = millis()%250;
    if(blinkTimer > 125){
      fill(93, 247, 37);
      textFont(comic, 50);
      text("click to return!!!", width/3, height/10*9);
    }
    pop();

  }

}

function mouseClicked(){
  console.log("got a click");
  clicked = !clicked;

}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
  } else {
    song.play();
  }
}