let editingMode = { rect: 0, line: 1 };

class Pencil {
	constructor(ctx, drawing, canvas, view) {
		this.currEditingMode = editingMode.rect
		this.currLineWidth = 5
		this.currColour = '#000000'
		this.currShape = 0

		this.ctx = ctx
		this.drawing = drawing
		this.view = view

		document.getElementById("spinnerWidth").addEventListener("input", (evt) => {
			this.currLineWidth = evt.target.valueAsNumber
		})
		document.getElementById("colour").addEventListener("input", (evt) => {
			this.currColour = evt.target.value
		})
		document.getElementById("butRect").addEventListener("input", (evt => {
			if (evt.target.checked) {
				this.currEditingMode = editingMode.rect
			}
		}))
		document.getElementById("butLine").addEventListener("input", (evt => {
			if (evt.target.checked) {
				this.currEditingMode = editingMode.line
			}
		}))

		new DnD(canvas, this);

		this.onInteractionStart = this.onInteractionStart.bind(this)
		this.onInteractionUpdate = this.onInteractionUpdate.bind(this)
		this.onInteractionEnd = this.onInteractionEnd.bind(this)
	}

	onInteractionStart(dnd) {
		if (this.currEditingMode == editingMode.rect) {
			this.currShape = new Rectangle(
				this.currColour,
				this.currLineWidth,
				dnd.initX,
				dnd.initY,
				0,
				0
			)
		} else {
			this.currShape = new Line(
				this.currColour,
				this.currLineWidth,
				dnd.initX,
				dnd.initY,
				dnd.initX,
				dnd.initY
			)
		}

		this.drawing.paint(this.ctx)
	}

	onInteractionUpdate(dnd) {
		if (this.currEditingMode == editingMode.rect) {
			this.currShape = new Rectangle(
				this.currColour,
				this.currLineWidth,
				dnd.initX,
				dnd.initY,
				dnd.finX - dnd.initX,
				dnd.finY - dnd.initY
			)
		} else {
			this.currShape = new Line(
				this.currColour,
				this.currLineWidth,
				dnd.initX,
				dnd.initY,
				dnd.finX,
				dnd.finY
			)
		}

		this.drawing.paint(this.ctx)
		this.currShape.paint(this.ctx)
	}

	onInteractionEnd(dnd) {
		this.drawing.shapes.push(this.currShape)
		this.drawing.paint(this.ctx)
		this.view.updateShapeList(this)
	}

	removeShape(i) {
		this.drawing.shapes.splice(i, 1)
		this.view.updateShapeList(this)
		this.drawing.paint(this.ctx)
	}
};