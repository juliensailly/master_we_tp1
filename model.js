const view = new View()

class Drawing {
    constructor() {
        this.shapes = []

        this.paint = this.paint.bind(this)
    }

    paint(ctx) {
        view.paintDrawing(ctx, this)
    }
}

class Shape {
    constructor(color, thickness, style = 'solid') {
        this.color = color
        this.thickness = thickness
        this.style = style; // 'solid', 'dotted', 'dashed'
        this.paint = this.paint.bind(this)
    }

    paint(ctx) {
        view.paintShape(ctx, this)
    }
}

class Rectangle extends Shape {
    constructor(color, thickness, x, y, width, height, style = 'solid') {
        super(color, thickness, style)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.paint = this.paint.bind(this)
    }

    paint(ctx) {
        view.paintRectangle(ctx, this)
    }
}

class Line extends Shape {
    constructor(color, thickness, x1, y1, x2, y2, style = 'solid') {
        super(color, thickness, style)
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.paint = this.paint.bind(this)
    }

    paint(ctx) {
        view.paintLine(ctx, this)
    }
}

class Ellipse extends Shape {
    constructor(color, thickness, cx, cy, rx, ry, style = 'solid') {
        super(color, thickness, style)
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
        this.paint = this.paint.bind(this);
    }

    paint(ctx) {
        view.paintEllipse(ctx, this);
    }
}