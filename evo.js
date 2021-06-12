import Blob from "./blob.js"
import BlobFactory from "./blob_factory.js";
import blobFactory from "./blob_factory.js"
import CollisionManager from "./naive_collision_manager.js";

let canvas, collisions;
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
    collisions = new CollisionManager()
    let blobFactory = new BlobFactory()
    for (let i = 0; i < 50; i++) {
        blobs.push(blobFactory.generateBlob("red"))
        // blobs.push(blobFactory.generateBlob("green"))
        // blobs.push(blobFactory.generateBlob("blue"))
        // blobs.push(blobFactory.generateBlob("purple"))
        // blobs.push(blobFactory.generateBlob("white"))
    }
    for (let i = 0; i < 10; i++) 
        blobs.push(blobFactory.generateBlob("green"))

    collisions.addCollidables(blobs)
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
    
    collisions.detectCollisions()
    collisions.checkFieldsOfVision()
    blobs.forEach(blob => blob.update())
}