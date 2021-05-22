import Blob from "./blob.js"

let canvas;
let context;
let secondsPassed;
let oldTimeStamp;
let fps;
let blobs = [];

// Listen to the onLoad event
window.onload = init;

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 50; i++) {
        // let sign =
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        let blobParams = {
            speed: {x: x, y: y},
            position: {x: 10, y: 10},
            color: "#540101",
            size: 30
        }
        blobs.push(new Blob(blobParams))
    }
    for (let i = 0; i < 50; i++) {
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        blobs.push(new Blob({speed: {x: x, y: y}, position: {x: canvas.width - 10, y: 10}, color: "#01450b"}))
    }

    for (let i = 0; i < 50; i++) {
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        blobs.push(new Blob({speed: {x: x, y: y}, position: {x: 10, y: canvas.height - 10}, color: "#021bd6"}))
    }

    for (let i = 0; i < 50; i++) {
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        blobs.push(new Blob({
            speed: {x: x, y: y},
            position: {x: canvas.width - 10, y: canvas.height - 10},
            color: "#4f0154"
        }))
    }

    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
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