class Drawing {
    constructor() {
        this.shapes = []
    }
}

class Shape {
    constructor(color, thickness) {
        this.color = color
        this.thickness = thickness
    }
}

class Rectangle extends Shape {
    constructor(color, thickness, x, y, width, height) {
        super(color, thickness)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}

class Line extends Shape {
    constructor(color, thickness, x1, y1, x2, y2) {
        super(color, thickness)
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }
}