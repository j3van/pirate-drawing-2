// Canvas - Pirate ship

//Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

// Sky
ctx.fillStyle = "Lightblue";
ctx.fillRect(0, 0, 500, 400);
//Water
ctx.fillStyle = "blue";
ctx.fillRect(0, 250, 500, 300);

// Text
ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by Jeevan", 300, 400);

// Pirate ship
var pirateShip = document.getElementById("pirate");
ctx.drawImage(pirateShip, 300, 160, 170, 100);

// Sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(55, 50, 40, 0, 2 * Math.PI);
ctx.fill();
//Fish head 1
ctx.lineWidth = 10;
ctx.fillStyle = "red";

ctx.beginPath();
ctx.arc(225, 300, 10, 0, 2 * Math.PI);
ctx.fill();

//Fish head 2
ctx.lineWidth = 10;
ctx.fillStyle = "pink";
ctx.beginPath();
ctx.arc(300, 350, 10, 0, 2 * Math.PI);
ctx.fill();

//Fish Tail for pink fish
ctx.fillStyle = "pink";
ctx.beginPath();
ctx.moveTo(300, 350);
ctx.lineTo(320, 340);
ctx.lineTo(320, 360);
ctx.lineTo(300, 350);
ctx.fill();
// Fish Tail for red fish
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(225, 300);
ctx.lineTo(245, 290);
ctx.lineTo(245, 310);
ctx.lineTo(225, 300);
ctx.fill();

// pier for treasure chest
ctx.fillStyle = "maroon";
ctx.fillRect(0, 220, 250, 30);

//Pier posts 1
ctx.strokeStyle = "maroon";
ctx.lineWidth = 20;

ctx.beginPath();
ctx.moveTo(10, 150);
ctx.lineTo(10, 400);
ctx.stroke();

//Pier post 4
ctx.strokeStyle = "maroon";
ctx.lineWidth = 20;

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 400);
ctx.stroke();

//Pirate
var pirateman = document.getElementById("pirate2");
ctx.drawImage(pirateman, 150, 130, 150, 100);

//Coral
var CoralPlant = document.getElementById("coral");
ctx.drawImage(CoralPlant, 370, 270, 100, 100);
