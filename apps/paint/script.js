const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasClear = document.getElementById('canvas-clear');
const main = document.querySelector('.main');
canvas.width = main.offsetWidth;
canvas.height = main.offsetHeight;

let drawing = false;
let x = 0;
let y = 0;
let pencilColor = 'green';
let pencilSize = '1';

canvas.addEventListener('mousedown', e =>{
    x = e.offsetX;
    y = e.offsetY;
    drawing = true;
});

canvas.addEventListener('mousemove', e =>{
    if(drawing === true){
        draw(x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

canvas.addEventListener('mouseup', e =>{
    if(drawing === true){
        drawing = false;
    }
});

canvas.addEventListener('touchstart', e =>{
    e.preventDefault();
    for (var i = 0; i < e.touches.length; i++) {
        var touch = e.touches[i];
        x = touch.pageX - 10;
        y = touch.pageY - 130;
    }
});

canvas.addEventListener('touchmove', e =>{
    e.preventDefault();
    for (var i = 0; i < e.touches.length; i++) {
        var touch = e.touches[i];
            drawOnTouch(x, y);
            x = touch.pageX - 10;
            y = touch.pageY - 130;
    }
});

function draw(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.strokeStyle = pencilColor;
    ctx.lineWidth = pencilSize;
    ctx.lineCap = "round";
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
};

function drawOnTouch(x, y){
    ctx.beginPath();
    ctx.strokeStyle = pencilColor;
    ctx.fillStyle = pencilColor;
    ctx.arc(x, y, pencilSize, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.stroke();
};

canvasClear.addEventListener('click', () =>{
    ctx.clearRect(0, 0, canvas.width,canvas.height);
});

const color = document.querySelectorAll('.colBtn');
color.forEach(e => e.addEventListener('click', () =>{
    pencilColor = e.value;
}));

const pencilSizeBtn = document.querySelectorAll('.pencilSizeBtn');
pencilSizeBtn.forEach(e => e.addEventListener('click', () =>{
    pencilSize = e.value;
}));