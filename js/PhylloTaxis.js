// var slidersDiv = document.querySelector('.sliders');
var pDeg = document.querySelector('.deg');
var sDeg = document.querySelector('.degree');
var pRad = document.querySelector('.rad');
var sRad = document.querySelector('.radius');
var pInnerRad = document.querySelector('.innerRad');
var sInnerRad = document.querySelector('.innerRadius');

var pLineOpa = document.querySelector('.pLineOpa');
var sLineOpa = document.querySelector('.sLineOpa');
var pFillOpa = document.querySelector('.pFillOpa');
var sFillOpa = document.querySelector('.sFillOpa');

var pInnerLineOpa = document.querySelector('.pInnerLineOpa');
var sInnerLineOpa = document.querySelector('.sInnerLineOpa');
var pInnerFillOpa = document.querySelector('.pInnerFillOpa');
var sInnerFillOpa = document.querySelector('.sInnerFillOpa');

var animate = document.querySelector('.checkbox');
var fiftieth = document.querySelector('.fiftieth');
var tenth = document.querySelector('.tenth');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var W = 600;
var H = 600;
canvas.width = W;
canvas.height = H;
ctx.lineWidth = 1;

var c = 10;
var n = 0;
var deg = 137.5;	//Bob Ross of coding's favourite angle, I think mine is 225
var rad = 20;
var innerRad = 10;
var lineOpa = 0.5;
var fillOpa = 0;
var innerLineOpa = 0.5;
var innerFillOpa = 0;

function draw() {
	if (n > 750) {
		if (animate.checked) {
			clearInterval(drawLoop);
		} else {
			return;
		}
	}
		
		var angle = radians(n * deg);
		var r = c * Math.sqrt(n);
		var x = r * Math.cos(angle) + W / 2;
		var y = r * Math.sin(angle) + H / 2;
		
		if (tenth.checked && (n % 10) === 0) {
			rad = Number(rad + 3); 
			innerRad = Number(innerRad + 3);
		}
		
		if (fiftieth.checked && (n % 50) === 0) {
			rad = Number(rad *1.1);
			innerRad = Number(innerRad * 1.1);
		}

		
		ctx.beginPath();
		ctx.strokeStyle = `rgba(0, 0 , 0, ${lineOpa})`;
		ctx.fillStyle = `rgba(0, 0, 0, ${fillOpa})`;
		ctx.arc(x, y, rad, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
			
		ctx.beginPath();
		ctx.strokeStyle = `rgba(0, 0 , 0, ${innerLineOpa})`;
		ctx.fillStyle = `rgba(0, 0, 0, ${innerFillOpa})`;
		ctx.arc(x, y, innerRad, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		
	n++;

	if (!animate.checked) {
		draw();
	}
}

function update() {
	
	deg = sDeg.value;
	rad = sRad.value;
	lineOpa = sLineOpa.value;
	fillOpa = sFillOpa.value;
	innerRad = sInnerRad.value;
	innerLineOpa = sInnerLineOpa.value;
	innerFillOpa = sInnerFillOpa.value;
	
	ctx.clearRect(0, 0, W, H);
	n = 0;
	
	if (animate.checked) {
		clearInterval(drawLoop);
		drawLoop = setInterval(draw, 1);
	} else {
		draw();
	}
}

sDeg.addEventListener('input', function() {
	pDeg.innerHTML = sDeg.value;
})
sRad.addEventListener('input', function() {
	pRad.innerHTML = sRad.value;
})
sInnerRad.addEventListener('input', function(e) {
	pInnerRad.innerHTML = e.target.value;
})
sLineOpa.addEventListener('input', function() {
	pLineOpa.innerHTML = sLineOpa.value;
})
sFillOpa.addEventListener('input', function() {
	pFillOpa.innerHTML = sFillOpa.value;
})
sInnerLineOpa.addEventListener('input', function() {
	pInnerLineOpa.innerHTML = sInnerLineOpa.value;
})
sInnerFillOpa.addEventListener('input', function() {
	pInnerFillOpa.innerHTML = sInnerFillOpa.value;
})
fiftieth.addEventListener('change', function() {
	update();
})
tenth.addEventListener('change', function() {
	update();
})


function radians(degrees) {
  return degrees * Math.PI / 180;
};

var drawLoop = setInterval(draw, 1);