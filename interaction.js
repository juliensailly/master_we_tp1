
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'

  // Developper les 3 fonctions gérant les événements

  // Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

class DnD {
  constructor(canvas) {
    this.canvas = canvas
    this.initX = 0
    this.initY = 0
    this.finX = 0
    this.finY = 0
    this.isMouseDown = false
  }

  mouseDownHandle(evt) {
    if (!evt) return

    this.isMouseDown = true
  }

  mouseMoveHandle(evt) {
    if (!evt || !this.isMouseDown) return

    let mousePosition = getMousePosition(this.canvas, evt)
    this.initX = this.finX
    this.initY = this.finY
    this.finX = mousePosition.x
    this.finY = mousePosition.y
  }

  mouseUpHandle(evt) {
    if (!evt) return

    this.isMouseDown = false
  }
}
