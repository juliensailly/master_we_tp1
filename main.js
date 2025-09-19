let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

let drawing = new Drawing();
let pencil = new Pencil(ctx, drawing, canvas, view);
drawing.paint(ctx, canvas);
