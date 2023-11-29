

class Animations {
    
    outerRadius = 100
    innerRadius = 50
    
    constructor(canvas) {
        this.canvas = canvas
        this.centerX = this.canvas.width / 2
        this.centerY = this.canvas.height / 2
        this.ctx = this.canvas.getContext('2d')
        this.startAnimationDottedCircle = null
    }

    drawPoint(pointX, pointY, text = "") {
        // Dibujar el punto
        this.ctx.fillRect(pointX, pointY, 5, 5)

        if (text) {
            // Dibujar el texto
            this.ctx.font = "12px Arial";
            this.ctx.fillText(text, pointX + 5, pointY + 5)
        }
    }

    drawDottedCircle(centerX, centerY, radius, options = {}) {

        if ((typeof options.animate !== 'undefined') && options.animate) {

            window.requestAnimationFrame(timestamp => {
                if (!this.startAnimationDottedCircle) {
                    this.startAnimationDottedCircle = timestamp
                }

                const elapsed = timestamp - this.startAnimationDottedCircle
                const duration = 2500
                const progress = Math.min(elapsed / duration, 1)

                let angle = progress * 2 * Math.PI
                this.drawDotCircle(centerX, centerY, radius, angle)

                if (elapsed < duration) {
                    this.drawDottedCircle(centerX, centerY, radius, options)
                } else {
                    if(typeof options.callback !== 'undefined') {
                        options.callback()
                    }
                }
            })
        } else {
            const numberOfDots = 150;
            for (let i = 0; i < numberOfDots; i++) {
                let angle = i * 2 * Math.PI / numberOfDots
                this.drawDotCircle(centerX, centerY, radius, angle)
            }
        }
    }

    drawDotCircle(centerX, centerY, radius, angle) {
        let dotX = centerX + radius * Math.cos(angle)
        let dotY = centerY + radius * Math.sin(angle)
        this.ctx.fillRect(dotX, dotY, 2, 2)
    }

    drawCircle(x, y, radius) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        // this.ctx.fillStyle = 'green';
        // this.ctx.fill();
        // this.ctx.lineWidth = 5;
        // this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();
    }

    drawSetShape() {
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


        this.ctx.beginPath();
        this.ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 0; i < points.length - 3; i += 3) {
            this.ctx.bezierCurveTo(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], points[i + 2][0], points[i + 2][1])
        }
        this.ctx.closePath()
        this.ctx.stroke()
    }


    animationOneStepOne() {
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.drawDottedCircle(this.centerX, this.centerY, this.outerRadius + 200);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.drawPoint(this.centerX + 195, this.centerY + 195);
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.drawPoint(this.centerX, this.centerY, 'X');
    }

    animationOneStepTwo(animation = false) {
        this.animationOneStepOne();
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        let options = {}
        if (animation) {
            this.startAnimationDottedCircle = undefined;
            options.animate = true
            options.numberOfDots = 100
        }
        this.drawDottedCircle(this.centerX, this.centerY, this.outerRadius + 160, options);
    }

    animationOneStepThree() {
        this.animationOneStepTwo();
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.drawPoint(this.centerX + 175, this.centerY + 175);
    }


    animationOneStepFour(animation = false) {
        this.animationOneStepThree();
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        let options = {}
        if (animation) {
            this.startAnimationDottedCircle = undefined;
            options.animate = true
            options.numberOfDots = 100
        }
        this.drawDottedCircle(this.centerX, this.centerY, this.outerRadius + 135, options);
    }

    animationOneStepFive(animation = false) {
        this.animationOneStepFour();
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.drawPoint(this.centerX + 155, this.centerY + 155);
    }


    animationOneStepSix(animation = false) {
        this.animationOneStepFive();
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        let options = {}
        for (let i = 0; i < 150; i++) {
            this.ctx.fillStyle = 'red';
            this.ctx.fill();
            this.drawPoint(this.centerX + 150 - i, this.centerY + 150 - i);
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animationCircleReset() {
        this.startAnimationDottedCircle = undefined;
    }
}


// animation
function animationOne(step) {
    if (step == 1) {
        canvasPuntoDeAcomulacion.animationOneStepOne()
    }

    if (step == 2) {
        canvasPuntoDeAcomulacion.animationOneStepTwo(true)
    }

    if (step == 3) {
        canvasPuntoDeAcomulacion.animationOneStepThree()
    }

    if (step == 4) {
        canvasPuntoDeAcomulacion.animationOneStepFour(true)
    }

    if (step == 5) {
        canvasPuntoDeAcomulacion.animationOneStepFive()
    }

    if (step == 6) {
        canvasPuntoDeAcomulacion.animationOneStepSix(true)
    }
}

function animationTwo() {
    canvas2PuntoDeAcomulacion.animationOneStepOne()
    canvas2PuntoDeAcomulacion.drawPoint(450, 450)
    canvas2PuntoDeAcomulacion.drawPoint(400, 200)
    canvas2PuntoDeAcomulacion.drawPoint(150, 425)
    
    canvas2PuntoDeAcomulacion.animationCircleReset()
    
    canvas2PuntoDeAcomulacion.drawDottedCircle(300, 300, 144, {
        animate: true,
        numberOfDots: 100
    });
}

