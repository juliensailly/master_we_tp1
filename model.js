class Drawing {
    constructor() {
        this.shapes = []

        this.paint = this.paint.bind(this)
    }

    paint(ctx) {
        ctx.fillStyle = '#e3ffd8ff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.shapes.forEach(function (shape) {
            shape.paint(ctx);
        });
    }
}

class Shape {
    constructor(color, thickness) {
        this.color = color
        this.thickness = thickness

        this.paint = this.paint.bind(this)
    }

    paint(ctx) {
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.thickness
    }
}

class Rectangle extends Shape {
    constructor(color, thickness, x, y, width, height) {
        super(color, thickness)
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.paint = this.paint.bind(this)
    }

    paint(ctx) {
        super.paint(ctx)
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
}

class Line extends Shape {
    constructor(color, thickness, x1, y1, x2, y2) {
        super(color, thickness)
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2

        this.paint = this.paint.bind(this)
    }

    paint(ctx) {
        super.paint(ctx)
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
}