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
        console.log(this.canvas)
        return this[this.blobGenerators[tribe]]()
    } 

    generateRedBlob(){
        let tribe = "red"
        let speed = 1
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        let blobParams = {
            speed: {x:x*speed, y: y*speed},
            position: {x: 10, y: 10},
            color: "#540101",
            size: 50}
        return new Blob(blobParams)
    }

    generateGreenBlob(){
        let tribe = "green"
        let speed = 3
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        console.log(this.canvas)
        let blobParams = {
            speed: {x:x*speed, y: y*speed},
            position: {x: this.canvas.width - 10, y: 10},
            color: "#01450b",
            size: 20}
        return new Blob(blobParams)
    }

    generateBlueBlob(){
        let tribe = "blue"
        let speed = 2
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        let blobParams = {
            speed: {x:x*speed, y: y*speed},
            position: {x: 10, y: this.canvas.height - 10},
            color: "#021bd6",
            size: 20}
        return new Blob(blobParams)
    }

    generatePurpleBlob(){
        let tribe = "purple"
        let speed = 2
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        let blobParams = {
            speed: {x:x*speed, y: y*speed},
            position: {x: this.canvas.width - 10, y: this.canvas.height - 10},
            color: "#4f0154",
            size: 20}
        return new Blob(blobParams)
    }

    generateWhiteBlob(){
        let tribe = "white"
        let speed = 3
        let x = Math.random(1) * (Math.random() < 0.5 ? -1 : 1)
        let y = Math.sqrt(1 - x * x) * (Math.random() < 0.5 ? -1 : 1)
        let blobParams = {
            speed: {x:x*speed, y: y*speed},
            position: {x: this.canvas.width/2, y: this.canvas.height/2},
            color: "yellow",
            size: 3 }
        return new Blob(blobParams)
    }
    
}
export default BlobFactory