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
        ctx.strokeStyle = shape.color
        ctx.lineWidth = shape.thickness
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