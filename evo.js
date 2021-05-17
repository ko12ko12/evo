import Blob from "./blob.js"
let canvas;
let context;
let secondsPassed;
let oldTimeStamp;
let fps;

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

    let blob = new Blob({speed: {x: 200, y: 200}, context})
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

    // Draw number to the screen
    context.fillStyle = 'black';
    context.fillRect(0, 0, 200, 100);
    context.font = '25px Arial';
    context.fillStyle = 'white';
    context.fillText("FPS: " + fps, 10, 30);

    // Perform the drawing operation
    // draw({objects: blobs});

    // The loop function has reached it's end
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function draw(args) {
    let objects = args.objects
    objects.forEach(obj => obj.render())
    // Get a random color, red or blue
    context.fillStyle = Math.random() > 0.5 ? '#ff8080' : '#0099b0';

    // Draw a rectangle on the canvas
    context.fillRect(250, 50, 200, 175);
}