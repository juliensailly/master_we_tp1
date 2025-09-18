// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

class DnD {
  constructor(canvas, interactor) {
    this.canvas = canvas
    this.initX = 0
    this.initY = 0
    this.finX = 0
    this.finY = 0
    this.isMouseDown = false

    this.mouseDownHandle = this.mouseDownHandle.bind(this)
    this.mouseMoveHandle = this.mouseMoveHandle.bind(this)
    this.mouseUpHandle = this.mouseUpHandle.bind(this)

    canvas.addEventListener('mousedown', this.mouseDownHandle)
    canvas.addEventListener('mousemove', this.mouseMoveHandle)
    canvas.addEventListener('mouseup', this.mouseUpHandle)
  }

  mouseDownHandle(evt) {
    if (!evt) return

    this.isMouseDown = true
    console.log(this.initX + " " + this.initY + " " + this.finX + " " + this.finY)
  }

  mouseMoveHandle(evt) {
    if (!evt || !this.isMouseDown) return

    let mousePosition = getMousePosition(this.canvas, evt)
    this.initX = this.finX
    this.initY = this.finY
    this.finX = mousePosition.x
    this.finY = mousePosition.y

    console.log(this.initX + " " + this.initY + " " + this.finX + " " + this.finY)
  }

  mouseUpHandle(evt) {
    if (!evt) return

    this.isMouseDown = false

    console.log(this.initX + " " + this.initY + " " + this.finX + " " + this.finY)
  }
}