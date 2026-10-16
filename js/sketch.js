/*interface yeardata = {
  year: number, 
  releasedpop: number,
  captivepop: number,
  wildbornpop: number
}*/

let condordata = [{year: 1990, releasedpop: 0, captivepop: 61, wildbornpop: 0},
  {year: 1991, releasedpop: 0, captivepop: 77, wildbornpop: 0},
  {year: 1992, releasedpop: 7, captivepop: 86, wildbornpop: 0},
  {year: 1993, releasedpop: 9, captivepop: 102, wildbornpop: 0},
  {year: 1994, releasedpop: 0, captivepop: 109, wildbornpop: 0},
  {year: 1995, releasedpop: 6, captivepop: 114, wildbornpop: 0},
  {year: 1996, releasedpop: 17, captivepop: 122, wildbornpop: 0},
  {year: 1997, releasedpop: 29, captivepop: 118, wildbornpop: 0},
  {year: 1998, releasedpop: 38, captivepop: 130, wildbornpop: 0},
  {year: 1999, releasedpop: 49, captivepop: 128, wildbornpop: 0},
  {year: 2000, releasedpop: 50, captivepop: 128, wildbornpop: 0},
  {year: 2001, releasedpop: 58, captivepop: 129, wildbornpop: 0},
  {year: 2002, releasedpop: 81, captivepop: 130, wildbornpop: 0},
  {year: 2003, releasedpop: 83, captivepop: 131, wildbornpop: 1},
  {year: 2004, releasedpop: 92, captivepop: 132, wildbornpop: 4},
  {year: 2005, releasedpop: 120, captivepop: 151, wildbornpop: 5},
  {year: 2006, releasedpop: 124, captivepop: 153, wildbornpop: 6},
  {year: 2007, releasedpop: 135, captivepop: 151, wildbornpop: 12},
  {year: 2008, releasedpop: 154, captivepop: 148, wildbornpop: 19},
  {year: 2009, releasedpop: 166, captivepop: 158, wildbornpop: 26},
  {year: 2010, releasedpop: 180, captivepop: 166, wildbornpop: 24},
  {year: 2011, releasedpop: 188, captivepop: 173, wildbornpop: 29},
  {year: 2011, releasedpop: 200, captivepop: 169, wildbornpop: 35},]

function setup() {

 // put setup code here

  createCanvas(700, 500, WEBGL);

  //angleMode(DEGREES);

  //window = buildGeometry();
    //let v0 = createVector(-40, 0, 0);
    //let v1 = createVector(0, -40, 0);
    //let v2 = createVector(40, 0, 0);
    //window.vertices = [v0, v1, v2];

}

function draw() {
  // put drawing code here
  background(220);
  //orbitControl();
}

function drawGraph(){
}

/*function drawDoor(){
  fill(bodycolor.r, bodycolor.g, bodycolor.b); //body
  box(100,300,10);
  //resetMatrix();

  //fill(100, 100, 100);
  //circle(100,100,50);

  fill(handlecolor.r, handlecolor.g, handlecolor.b); //handle
  translate(30,0,15);
  sphere(10,6,6);
  translate(0,0,-30);
  sphere(10,6,6);

  translate(0,8,10);    box(12,25,2);
  translate(0,0,10);
  box(12,25,2);    //resetMatrix();

  translate(0,-8,-10); translate(0,0,-10); translate(0,0,30); translate(-30,0,-15);

  translate(0,0,7.5); //window
  if(havewindow){
    fill(240, 240, 240);
    circle(0,-70,50);
  }

  translate(0,0,1); //window cross
  if(havewindow && havecross){
    noStroke();        
    fill(bodycolor.r, bodycolor.g, bodycolor.b);
    rect(-5,-100,10,60);
    rect(-30,-75,60,10);
    stroke(10,10,10);      
  }
}

function generateDoor(){

  bodycolor.r = random(0,255); bodycolor.g = random(0,255); bodycolor.b = random(0,255);
  handlecolor.r = random(0,255); handlecolor.g = random(0,255); handlecolor.b = random(0,255);
  if(random(0,2) < 1.3){
    havewindow = true;
    if(random(0,2) < 1.3){
      havecross = true;
    }
    else{
      havecross = false;
    }
  }
  else{
    havewindow = false;
  }

  if(random(0,2) < 1){
    isdouble = true;
  }
  else{
    isdouble = false;
  }
  /*quad(doorx, doory, doorx + 80, doory + 20, doorx+80, doory +170, doorx, doory + 150); //frame
  quad(doorx, doory, doorx + 80, doory + 20, doorx + 100, doory+10, doorx+20, doory-10);
  quad(doorx + 80, doory + 20, doorx + 100, doory+10, doorx + 100, doory+160, doorx + 80, doory + 170);*/

