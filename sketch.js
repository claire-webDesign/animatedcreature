let x = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(64,210,220);
  
    //(x,y,width,height)
  ellipse(x+300,300,200,400);
  
    //(x,y,width,height)
  rect(150,500,300,100);
  
    //(x,y,width,height)
  ellipse(x+400,450,70,90);
  
    //(x,y,width,height)
  ellipse(x+200,450,70,90);
  
    //(x1,y1,x2,y2)
  line(x+10,150,190,190);
  
    //(x1,y1,x2,y2)
  line(x+10,240,190,190);
  
    //(x1,y1,x2,y2)
  line(x+10,150,190,10);
  
    //(x1,y1,x2,y2)
  line(x+10,240,190,10);
  
    //(x,y,width,height)
  ellipse(x+300,300,100,400);
  fill(40,30,70);
  
  //(x,y,width,height)
  ellipse(x+200,200,200,150);
  fill(40,30,70);
  
  //(x,y,width,height)
  ellipse(x+400,200,200,150);
  fill(255,255,0);
  
  //(x,y,width,height)
  ellipse(x+200,150,100,100);
    
  //(x,y,width,height)
  ellipse(x+400,150,100,100);
  fill(900,10,40);
  
  strokeWeight(3);


  console.log(x);
  x=x+1;

 if (x == 500)
    {
     x = 0;
   }
  
}