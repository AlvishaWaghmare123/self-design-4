
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState ="firstStage"
var score
function preload()
{
	startImage=loadImage("images/start.png");
	bg1image=loadImage("images/bg1.jpg");
	bgImage=loadImage("images/bg.jpg");
	AddButton=loadImage("images/add.png")
	SubButton=loadImage("images/sub.png")
	DivisionButton=loadImage("images/division.png")
	MultiplicationButton=loadImage("images/multiply.png")

	
}

function setup() {
	createCanvas( displayWidth ,displayHeight);

	 startButton=createImg("images/start.png")
	 startButton.position(displayWidth/2+300,displayHeight/2)
	 startButton.size(300,300)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//start=createSprite(displayWidth/2,displayHeight/2)
	Addition=createSprite(displayWidth/3-50,displayHeight/2-100)
	Addition.visible=false
	Addition.addImage(AddButton)
	Addition.scale=3;

	Subtraction=createSprite(displayWidth-100,displayHeight/2-100)
	Subtraction.visible=false
	Subtraction.addImage(SubButton)
	Subtraction.scale=3

	Multiplication=createSprite(displayWidth/3-50,displayHeight/2+150)
	Multiplication.visible=false
	Multiplication.addImage(MultiplicationButton)
	Multiplication.scale=0.5

	Division=createSprite(displayWidth-100,displayHeight/2+150)
	Division.visible=false
	Division.addImage(DivisionButton)
	Division.scale=0.2;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);

  if(gameState==="firstStage"){
	  startButton.mousePressed(()=>{
		  gameState="chooseStage"

		  startButton.hide();


	  })


  }
  else  if(gameState==="chooseStage"){
	 background(bg1image) 

	 Addition.visible=true;
	 Subtraction.visible=true;
	 Multiplication.visible=true;
	 Division.visible=true;

	 if(mousePressedOver(Addition)){
		 gameState="Addition"
		 
	 }
/*
	 if(mousePressedOver(Multiplication)){
		Multiplication()
	}
	if(mousePressedOver(Division)){
		Division()
	}
	if(mousePressedOver(Subtraction)){
		Subtraction()
	}*/
	

  }
 
  if(gameState==="Addition"){
	AdditionQuestions ()
}
  drawSprites();
 
}

function AdditionQuestions(){
	background("brown")
	Addition.visible=false;
	 Subtraction.visible=false;
	 Multiplication.visible=false;
	 Division.visible=false;


}
function SubtractionQuestions(){
	
}
function DivisionQuestions(){
	
}
function MultiplicationQuestions(){

}


