var jack, jackImg, jackRight, jackLeft;


function preload(){
    jackImg = loadImage("knight/knight1.png");
    jackRight = loadAnimation("knight/knight1.png", "knight/knight2.png", "knight/knight3.png","knight/knight4.png", "knight/knight5.png", "knight/knight6.png", "knight/knight7.png");
    jackLeft = loadAnimation("knight/k1.png","knight/k2.png","knight/k3.png","knight/k4.png","knight/k5.png","knight/k6.png","knight/k7.png")

}
function setup(){
    createCanvas(500,500);
    jack = createSprite(200,200,10,10);
    jack.addAnimation("knight1", jackRight);
    jack.addAnimation("knight2", jackLeft);
    jack.scale = 0.6;
}

function draw(){
background(0);
if(keyDown(RIGHT_ARROW)){
    jack.x = jack.x + 3;
    jack.changeAnimation("knight1", jackRight);
}
if(keyDown(LEFT_ARROW)){
    jack.x = jack.x - 3;
    jack.changeAnimation("knight2", jackLeft);
}
if(keyDown(UP_ARROW)){
    jack.y = jack.y - 3;
}
if(keyDown(DOWN_ARROW)){
    jack.y = jack.y + 3;
}
    drawSprites();

}