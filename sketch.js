//Create variables here
var dogImg, happyDog, database, foodStock;
var foodS = 0

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,350,50,50);
  dog.addImage(dogImg);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(255);
text("food : " + foodS,50,50)
if(keyWentDown(UP_ARROW)){
  console.log(foodS);
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x === 0){
    x = 0;
    }else{
      x = x-1;
    }
database.ref('/').update({
  Food:x
})
}


