var myImage;

function preload(){
    
    myImage = loadImage("images/chicken.jpg");
}

function setup() {
  createCanvas(360,640);
  
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
   background(255);
    imageMode(CENTER);
    image(myImage, width/2, height/2,windowWidth, windowHeight);
  
  var volume = mic.getLevel();
  

 
  push();  //Start with transformations
  translate(width/2,height/2);
 
  
  
  var size = map(volume,0,1,width/5,width/2);
  

  
  size = map(volume,0,1, 100, 500)
  
 
 
  strokeWeight(4);
  stroke(180, 8, 40);
  fill(251,227,95);
 
  
  ellipse(0,-200,15,size/4);
   
    
 
  

  
  push();
 
   
 
 

  
  
  
  
  
}