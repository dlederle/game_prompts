var grammar = tracery.createGrammar(src);
function setup() {
  createCanvas(1024, 1024);
  noLoop();
}


function drawTopics() {
  var y=100;
  var x=0;
  var str = '';
  for(var i=0; i<3; i++) {
     str += i + ": " + grammar.flatten('#origin#') + '\n';
  }
  text(str, x, y, width, height);
}

function draw() {
  background(155);
  fill(50);
  textSize(50);
  text("Prompts for CSIM 2016:", 0, 50);
  textSize(32);
  drawTopics();
}
