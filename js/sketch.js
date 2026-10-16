/*interface yeardata = {
  year: number, 
  releasedpop: number,
  captivepop: number,
  wildbornpop: number
}*/
let canvwidth = 700; let canvheight = 500;
let maxcondorpop = 700;

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
  {year: 2012, releasedpop: 200, captivepop: 169, wildbornpop: 35},]

function setup() {
  createCanvas(canvwidth, canvheight);


}

function draw() {
  background(220);
  drawGraph();
}

function drawGraph(){
  stroke('black');
  strokeWeight(1); //title
  textSize(32);
  text("Californian Condor Population", canvwidth/4, canvheight/10-10);
   //main graph bars
  strokeWeight(4);
  line(canvwidth/10, 9*canvheight/10, 13*canvwidth/14, 9*canvheight/10);
  line(canvwidth/10, 9*canvheight/10,canvwidth/10, canvheight/10);

  let wildpointarray = []; let captivepointarray = []; 
  let totalpointarray = [];
  

  for(let i = 0; i < condordata.length; i++){ //x axis
    strokeWeight(2);
    let xpoint = canvwidth/10+(i+1)*(9*canvwidth/10)/(condordata.length + 2);
    line(xpoint, 9*canvheight/10+5, xpoint, 9*canvheight/10-5);
    strokeWeight(0.5);
    textSize(8);
    text(condordata[i].year, xpoint-10, 9*canvheight/10+20);

    wildpointarray.push(createVector(xpoint, 9*canvheight/10 -(condordata[i].wildbornpop+condordata[i].releasedpop)));
    captivepointarray.push(createVector(xpoint, 14*canvheight/15 -condordata[i].captivepop));
    totalpointarray.push(createVector(xpoint, 14*canvheight/15 -(condordata[i].wildbornpop+condordata[i].releasedpop+condordata[i].captivepop)));
  }

  for(let i = 1; i < maxcondorpop/100; i++){ //y axis
    strokeWeight(2);
    let ypoint = (9*canvheight/10 - (i)*(9*canvheight/10)/(maxcondorpop/100));
    line(canvwidth/10-8, ypoint, canvwidth/10+8, ypoint);
    strokeWeight(0.5);
    textSize(10);
    text(i*100, canvwidth/10-30, ypoint+2);
  }

  strokeWeight(2);
  stroke('green');
  for(let i = 0; i < wildpointarray.length - 1; i++){ //draws points
    line(wildpointarray[i].x, wildpointarray[i].y,wildpointarray[i+1].x, wildpointarray[i+1].y)
    circle(wildpointarray[i+1].x, wildpointarray[i+1].y,4)
  }
  stroke('red');
  for(let i = 0; i < captivepointarray.length - 1; i++){ 
    line(captivepointarray[i].x, captivepointarray[i].y,captivepointarray[i+1].x, captivepointarray[i+1].y)
    circle(captivepointarray[i+1].x, captivepointarray[i+1].y,4)
  }
  stroke('blue');
  for(let i = 0; i < totalpointarray.length - 1; i++){ 
    line(totalpointarray[i].x, totalpointarray[i].y,totalpointarray[i+1].x, totalpointarray[i+1].y)
    circle(totalpointarray[i+1].x, totalpointarray[i+1].y,4)
  }
}
