import Blob from "./blob.js"

class BlobFactory{
    constructor(args){
        const self = this;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.blobGenerators = {
            red: "generateRedBlob",
            green: "generateGreenBlob",
            blue: "generateBlueBlob",
            purple: "generatePurpleBlob",  
            white: "generateWhiteBlob", 
            
        }
    }
    generateBlob(tribe){
        return this[this.blobGenerators[tribe]]()
    } 

    generateRedBlob(){
        const tribe = "red"
        const visionRadius = 200
        const speed = 1
        const x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        const y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        const blobParams = {
            speed: {x:x*speed, y: y*speed, magnitude: speed},
            position: {x: 10, y: 10},
            color: "#540101",
            radius: 50,
            tribe, visionRadius}
        return new Blob(blobParams)
    }

    generateGreenBlob(){
        const tribe = "green"
        const visionRadius = 100
        const speed = 3
        const x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        const y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        const blobParams = {
            speed: {x:x*speed, y: y*speed, magnitude: speed},
            position: {x: this.canvas.width - 10, y: 10},
            color: "#01450b",
            radius: 20, tribe, visionRadius}
        return new Blob(blobParams)
    }

    generateBlueBlob(){
        const tribe = "blue"
        const visionRadius = 20
        const speed = 2
        const x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        const y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        const blobParams = {
            speed: {x:x*speed, y: y*speed, magnitude: speed},
            position: {x: 10, y: this.canvas.height - 10},
            color: "#021bd6",
            radius: 20, tribe, visionRadius}
        return new Blob(blobParams)
    }

    generatePurpleBlob(){
        const tribe = "purple"
        const visionRadius = 20
        const speed = 2
        const x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        const y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        const blobParams = {
            speed: {x:x*speed, y: y*speed, magnitude: speed},
            position: {x: this.canvas.width - 10, y: this.canvas.height - 10},
            color: "#4f0154",
            radius: 20, tribe, visionRadius}
        return new Blob(blobParams)
    }

    generateWhiteBlob(){
        const tribe = "white"
        const visionRadius = 20
        const speed = 3
        const x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        const y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        const blobParams = {
            speed: {x:x*speed, y: y*speed, magnitude: speed},
            position: {x: this.canvas.width/2, y: this.canvas.height/2},
            color: "yellow",
            radius: 3, tribe, visionRadius}
        return new Blob(blobParams)
    }
    
}
export default BlobFactory