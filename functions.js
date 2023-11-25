var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')


function drawPoint(pointX, pointY, text = "") {
    // Dibujar el punto
    ctx.fillRect(pointX, pointY, 2, 2)

    if (text) {
        // Dibujar el texto
        ctx.font = "12px Arial";
        ctx.fillText(text, pointX + 5, pointY + 5)
    }
}

function drawDottedCircle(centerX, centerY, radius, options = {}) {
    const numberOfDots = 100;
    if ((typeof options.animate !== 'undefined') && options.animate) {
        if (typeof options.numberOfDots !== 'undefined') {
            options.numberOfDots = numberOfDots
        }
        options.numberOfDots--
        let i = numberOfDots - options.numberOfDots
        let angle = i * 2 * Math.PI / numberOfDots
        drawDotCircle(centerX, centerY, radius, angle)
        if (options.numberOfDots > 0) {
            window.requestAnimationFrame((timeStamp) => {
                console.log(timeStamp)
                drawDottedCircle(centerX, centerY, radius, options)

            })
        }
    }
    for (let i = 0; i < numberOfDots; i++) {
        let angle = i * 2 * Math.PI / numberOfDots
        drawDotCircle(centerX, centerY, radius, angle)
    }
}

function drawDotCircle(centerX, centerY, radius, angle) {
    let dotX = centerX + radius * Math.cos(angle)
    let dotY = centerY + radius * Math.sin(angle)
    ctx.fillRect(dotX, dotY, 2, 2)
}

function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'green';
    // ctx.fill();
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = '#003300';
    ctx.stroke();
}

function drawSetShape() {
    const points = [
        [259, 353],
        [204, 341],
        [204, 341],
        [175, 322],
        [154, 291],
        [154, 291],
        [163, 248],
        [163, 248],
        [178, 221],
        [178, 221],
        [196, 193],
        [196, 190],
        [191, 165],
        [191, 165],
        [203, 145],
        [203, 145],
        [237, 138],
        [237, 138],
        [281, 141],
        [281, 141],
        [293, 171],
        [293, 171],
        [312, 197],
        [312, 197],
        [316, 242],
        [316, 243],
        [316, 243],
        [313, 284],
        [313, 286],
        [295, 344],
        [295, 344]
    ];


    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 0; i < points.length - 3; i += 3) {
        // ctx.arcTo(points[i][0], points[i][1], points[i+1][0], points[i+1][1], 22);
        console.log(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], points[i + 2][0], points[i + 2][1])
        ctx.bezierCurveTo(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], points[i + 2][0], points[i + 2][1])
    }
    ctx.closePath()
    ctx.stroke()
}


function animationOneStepOne() {
    ctx.fillStyle = 'white';
    ctx.fill();
    drawDottedCircle(centerX, centerY, outerRadius + 200);
    ctx.fillStyle = 'red';
    ctx.fill();
    drawPoint(centerX + 195, centerY + 195);
    ctx.fillStyle = 'white';
    ctx.fill();
    drawPoint(centerX, centerY, 'X');
}

function animationOneStepTwo(animation = false) {
    animationOneStepOne();
    ctx.fillStyle = 'green';
    ctx.fill();
    let options = {}
    if (animation) {
        options.animate = true
        options.numberOfDots = 100
    }
    drawDottedCircle(centerX, centerY, outerRadius + 160, options);
    ctx.fillStyle = 'red';
    ctx.fill();
    drawPoint(centerX + 175, centerY + 175);
}

function animationOneStepThree(animation = false) {
    animationStepTwo();
    ctx.fillStyle = 'green';
    ctx.fill();
    drawDottedCircle(centerX, centerY, outerRadius + 135);
    ctx.fillStyle = 'red';
    ctx.fill();
    drawPoint(centerX + 155, centerY + 155);
}


// animation
function animationOne(step) {

    if (step == 1) {
        animationOneStepOne()
    }

    if (step == 2) {
        animationOneStepTwo(true)
    }

    if (step == 3) {
        animationOneStepThree()
    }

}
