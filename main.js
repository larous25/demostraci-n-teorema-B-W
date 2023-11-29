

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




const canvasPuntoDeAcomulacion = new Animations(document.getElementById('puntoDeAcomulacion'));
const canvas2PuntoDeAcomulacion = new Animations(document.getElementById('puntoDeAcomulacion2AnimacionSolo'));
const canvasConjuntoAcotado = new Animations(document.getElementById('conjuntoAcotado'));

var stepAnimationOne = 1;
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

var conclusion = document.querySelector('.mostrarDondeNoConclusion');




animationOne(stepAnimationOne)


document.getElementById('fullscreenButton').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    slide(currentSlide - 1 + slides.length)
});

document.getElementById('nextBtn').addEventListener('click', () => {
    slide(currentSlide + 1)
});


function slide (number) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (number) % slides.length;
    slides[currentSlide].style.display = 'block';

    if(currentSlide == 1) animationTwo();
    if(currentSlide == 3) animationBoundedSet();
}

document.getElementById('pBtonSlide1').addEventListener('click', () => {
    stepAnimationOne--;
    animationOne(stepAnimationOne);
});
document.getElementById('nBtonSlide1').addEventListener('click', () => {
    stepAnimationOne++;
    animationOne(stepAnimationOne);
});


document.querySelector('.mostrarDondeNo').addEventListener('click', () => {
    conclusion.style.display = 'block';
});



