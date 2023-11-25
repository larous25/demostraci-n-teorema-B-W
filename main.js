var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var outerRadius = 100;
var innerRadius = 50;



// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(centerX, centerY, outerRadius);
//     drawCircle(centerX, centerY, innerRadius);
//     innerRadius = (innerRadius + 1) % outerRadius;
// }

// setInterval(animate, 100);

// var canvas = document.getElementById('myCanvas');
//     var ctx = canvas.getContext('2d');

//     // Dibujar el eje de los números reales
//     ctx.beginPath();
//     ctx.moveTo(0, canvas.height / 2);
//     ctx.lineTo(canvas.width, canvas.height / 2);
//     ctx.stroke();

//     // Dibujar el conjunto como segmentos de línea
//     var conjunto = [[100, 200], [300, 350], [400, 400]];  // Cambia esto por tu conjunto
//     for (var i = 0; i < conjunto.length; i++) {
//         ctx.beginPath();
//         ctx.moveTo(conjunto[i][0], canvas.height / 2 - 10);
//         ctx.lineTo(conjunto[i][0], canvas.height / 2 + 10);
//         ctx.moveTo(conjunto[i][1], canvas.height / 2 - 10);
//         ctx.lineTo(conjunto[i][1], canvas.height / 2 + 10);
//         ctx.moveTo(conjunto[i][0], canvas.height / 2);
//         ctx.lineTo(conjunto[i][1], canvas.height / 2);
//         ctx.stroke();
//     }


// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// // Dibujar los ejes
// ctx.beginPath();
// ctx.moveTo(0, canvas.height / 2);
// ctx.lineTo(canvas.width, canvas.height / 2);
// ctx.moveTo(canvas.width / 2, 0);
// ctx.lineTo(canvas.width / 2, canvas.height);
// ctx.stroke();

// // Dibujar el conjunto como rectángulos
// var conjunto = [[100, 200], [300, 350], [400, 400]];  // Cambia esto por tu conjunto
// for (var i = 0; i < conjunto.length; i++) {
//     ctx.fillRect(conjunto[i][0], conjunto[i][1], 10, 10);
// }


// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');




// drawCircle(centerX, centerY, outerRadius + 50)
// drawPoint(centerX, centerY, 'X');
// drawPoint(centerX+outerRadius, centerY+outerRadius);
// drawCircle(centerX, centerY, outerRadius+35)
// drawPoint(centerX+outerRadius-10, centerY+outerRadius-10);
// drawCircle(centerX, centerY, outerRadius+23)
// drawPoint(centerX+outerRadius-20, centerY+outerRadius-20);
// // drawCircle(centerX, centerY, outerRadius+17)
// drawPoint(centerX+outerRadius-30, centerY+outerRadius-30);
// // drawCircle(centerX, centerY, outerRadius+7)
// drawPoint(centerX+outerRadius-30, centerY+outerRadius-30);



animationOne(1)