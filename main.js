
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
new DnD(canvas);
/////

// Code temporaire pour tester l'affiche de la vue
let rec = new Rectangle('#00CCC0', 5, 10, 20, 50, 100);
rec.paint(ctx);
let ligne = new Line('#00CCC0', 5, 10, 20, 50, 100);
ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

