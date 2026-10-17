/*interface yeardata = {
  year: number, 
  releasedpop: number,
  captivepop: number,
  wildbornpop: number
}*/
let canvwidth = 700; let canvheight = 500;
let maxcondorpop = 700; let zoom = 50; let focus = 1;

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
  {year: 2012, releasedpop: 200, captivepop: 169, wildbornpop: 35},
  {year: 2013, releasedpop: 230, captivepop: 182, wildbornpop: 0},
  {year: 2014, releasedpop: 228, captivepop: 193, wildbornpop: 0},
  {year: 2015, releasedpop: 268, captivepop: 167, wildbornpop: 0},
  {year: 2016, releasedpop: 276, captivepop: 170, wildbornpop: 0},
  {year: 2017, releasedpop: 290, captivepop: 173, wildbornpop: 0},
  {year: 2018, releasedpop: 312, captivepop: 176, wildbornpop: 0},
  {year: 2019, releasedpop: 337, captivepop: 181, wildbornpop: 0},
  {year: 2020, releasedpop: 329, captivepop: 175, wildbornpop: 0},
  {year: 2021, releasedpop: 338, captivepop: 203, wildbornpop: 0},
  {year: 2022, releasedpop: 350, captivepop: 214, wildbornpop: 0},
  {year: 2023, releasedpop: 344, captivepop: 217, wildbornpop: 0},
  {year: 2024, releasedpop: 369, captivepop: 197, wildbornpop: 0},
  {year: 2025, releasedpop: 392, captivepop: 215, wildbornpop: 0},]

function setup() {
  createCanvas(canvwidth+200, canvheight);
}

function draw() {
  let zoomSlider = document.getElementById("zoomslider");
  zoom = zoomSlider.value;
  let focusSlider = document.getElementById("focusslider");
  focus = focusSlider.value;
  if((zoom - 49)/(250)*36 < focus){
    focusSlider.value = (zoom - 49)/(250)*36;
    focus = focusSlider.value;
  }
  //console.log("zoom is: " + zoom);
  background(220);
  drawGraph();
  //zoom = Number(document.getElementById("zoomslider").value);
  //console.log("zoom is: " + zoom);
}

function drawGraph(){
  stroke('black');
  strokeWeight(1); //title
  textSize(32);
  text("Californian Condor Population", canvwidth/4, canvheight/10-10);
   //main graph bars
  strokeWeight(4);
  line(canvwidth/10, 9*canvheight/10, 1.25*canvwidth, 9*canvheight/10);
  line(canvwidth/10, 9*canvheight/10,canvwidth/10, canvheight/10);

  let wildpointarray = []; let captivepointarray = []; 
  let totalpointarray = [];
  

  for(let i = 0; i < condordata.length; i++){ //x axis
    strokeWeight(2);
    let xpoint = canvwidth/10+(i+1)*((zoom/50)*1.2*canvwidth)/(condordata.length + 2)-(120*(focus-1));
    line(xpoint, 9*canvheight/10+5, xpoint, 9*canvheight/10-5);
    strokeWeight(0.5);
    textSize(8);
    text(condordata[i].year, xpoint-10, 9*canvheight/10+20);

    wildpointarray.push(createVector(xpoint, 9*canvheight/10 -(condordata[i].wildbornpop+condordata[i].releasedpop)/1.5));
    captivepointarray.push(createVector(xpoint, 14*canvheight/15 -condordata[i].captivepop/1.5));
    totalpointarray.push(createVector(xpoint, 14*canvheight/15 -(condordata[i].wildbornpop+condordata[i].releasedpop+condordata[i].captivepop)/1.5));
  }

  for(let i = 1; i < maxcondorpop/100; i++){ //y axis
    strokeWeight(2);
    let ypoint = (9*canvheight/10 - (i)*(9*canvheight/10)/(maxcondorpop/100));
    line(canvwidth/10-8, ypoint, canvwidth/10+8, ypoint);
    strokeWeight(0.5);
    textSize(10);
    text(i*100, canvwidth/10-30, ypoint+2);
  }

  stroke('blue'); strokeWeight(4); //Legend
  line(95,147,115,147);
  stroke('black'); strokeWeight(0.5)
  text("Total Condor Population", 120,150);
  stroke('red'); strokeWeight(4); 
  line(95,167,115,167);
  stroke('black'); strokeWeight(0.5)
  text("Captive Condor Population", 120,170);
  stroke('green'); strokeWeight(4); 
  line(95,187,115,187);
  stroke('black'); strokeWeight(0.5)
  text("Wild Condor Population", 120,190);

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
