
let editingMode = { rect: 0, line: 1 };

class Pencil {
	constructor(ctx, drawing, canvas) {
		this.currEditingMode = editingMode.line;
		this.currLineWidth = 5;
		this.currColour = '#000000';
		this.currentShape = 0;

		// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
		document.getElementById("spinnerWidth").addEventListener("input", (evt) => {
			this.currLineWidth = evt.target.valueAsNumber
		})
		document.getElementById("colour").addEventListener("input", (evt) => {
			this.currColour = evt.target.value
		})
		document.getElementById("butRect").addEventListener("input", (evt => {
			if (evt.target.checked) {
				this.currEditingMode = editingMode.rect
			} else {
				this.currentShape = editingMode.line
			}
		}))

		new DnD(canvas, this);

		// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	}
};


