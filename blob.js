class Blob {
    constructor(args) {
        this.context = args.context
        this.position = args.position
        this.speed = args.speed
        }

    render() {
        this.context.beginPath();
        this.context.arc(this.position.x, this.position.y, 20, 0, Math.PI * 2);
        this.context.fillStyle = "red";
        this.context.fill();
        this.context.closePath();

    }
    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}

export default Blob