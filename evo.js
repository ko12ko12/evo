import Blob from "./blob.js"
let canvas;
let context;
let secondsPassed;
let oldTimeStamp;
let fps;
let blobs = [];
// Listen to the onLoad event
window.onload = init;

// Trigger init function when the page has loaded
function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    blobs.push(new Blob({speed: {x: 1, y: -1}, position: {x: 500, y: 500}, context}))
    // Request an animation frame for the first time
    // The gameLoop() function will be called as a callback of this request
    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
    // let blobs = args.blobs
    // let timeStamp = args.timeStamp
    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw number to the screen
    context.fillStyle = 'black';
    context.fillRect(0, 0, 200, 100);
    context.font = '25px Arial';
    context.fillStyle = 'white';
    context.fillText("FPS: " + fps, 10, 30);



    update()
    render();

    window.requestAnimationFrame(gameLoop);
}

function render() {
    blobs.forEach(blob => blob.render())
}


function update() {
    blobs.forEach(blob => blob.update())
}