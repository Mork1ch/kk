'use strict'

function draw(){

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let grd=ctx.createLinearGradient(0,0,170,90);
grd.addColorStop(0,"red");
grd.addColorStop(0.2,"orange");
grd.addColorStop(0.3,"yellow");
grd.addColorStop(0.4,"green");
grd.addColorStop(0.5,"skyBlue");
grd.addColorStop(0.6,"darkBlue");
grd.addColorStop(0.7,"darkViolet");
  
ctx.fillStyle=grd;
ctx.fillRect(20,20,100,100);
}

function grid(){

var canvas = document.getElementById('grid')
var ctx = canvas.getContext('2d')

    var a = 10

    for (let i = 0; i < 30; i++){
        
                ctx.moveTo(a, 0);
                ctx.lineTo(a, 400);
                ctx.stroke();

                ctx.moveTo(0, a);
                ctx.lineTo(400, a);
                ctx.stroke();

            a = a + 10
    }
}

function generate(){
    
var canvas = document.getElementById('canvas1')
var ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)

for (let i = 0; i < 19; i++){

    var minX = 20;
    var maxX = 290;
    var minY = 20;
    var maxY = 130;
    var minRad = 10;
    var maxRad = 30;

    var radius = Math.floor(Math.random() * (maxRad - minRad + 1)) + minRad;
    var x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    var y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    let r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256));

    let newcolor = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.moveTo(110,75);
    ctx.fillStyle = newcolor;
    ctx.fill();
   }
}