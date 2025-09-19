class View {
    constructor() {
        this.paintDrawing = this.paintDrawing.bind(this)
        this.paintShape = this.paintShape.bind(this)
        this.paintRectangle = this.paintRectangle.bind(this)
        this.paintLine = this.paintLine.bind(this)
    }

    paintDrawing(ctx, drawing) {
        ctx.fillStyle = '#e3ffd8ff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawing.shapes.forEach(function (shape) {
            shape.paint(ctx);
        });
    }

    paintShape(ctx, shape) {
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = shape.thickness;
        // Set line style
        if (shape.style === 'dotted') {
            ctx.setLineDash([2, 6]);
        } else if (shape.style === 'dashed') {
            ctx.setLineDash([10, 10]);
        } else {
            ctx.setLineDash([]);
        }
    }
    paintEllipse(ctx, ellipse) {
        this.paintShape(ctx, ellipse);
        ctx.beginPath();
        ctx.ellipse(ellipse.cx, ellipse.cy, Math.abs(ellipse.rx), Math.abs(ellipse.ry), 0, 0, 2 * Math.PI);
        ctx.stroke();
    }

    paintRectangle(ctx, rectangle) {
        this.paintShape(ctx, rectangle)
        ctx.beginPath();
        ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        ctx.stroke();
    }

    paintLine(ctx, line) {
        this.paintShape(ctx, line)
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
    }

    updateShapeList(controller) {
        let shapeListElement = document.getElementById("shapeList")
        let rectangleListElement = document.getElementById("rectangle-element")
        let lineListElement = document.getElementById("line-element")

        shapeListElement.innerHTML = ""
        controller.drawing.shapes.forEach((shape, i) => {
            let temp;
            if (shape instanceof Rectangle) {
                temp = rectangleListElement.cloneNode(true)
            } else if (shape instanceof Ellipse) {
                temp = rectangleListElement.cloneNode(true)
                temp.querySelector('span.me-2').innerHTML = '&#9675;';
                temp.querySelectorAll('span.me-2')[1].textContent = 'Ellipse';
            } else {
                temp = lineListElement.cloneNode(true)
            }
            temp.id = ""
            temp.style = ""
            temp.addEventListener("click", () => {
                controller.removeShape(i)
            })
            shapeListElement.appendChild(temp)
        });
    }
}