class Blob {
    constructor(args) {
        for (const attribute in args)
            this[attribute] = args[attribute]
    }
    render() {
        this.context.arc(this.position.x, this.position.y, 20, 0, Math.PI * 2);
        this.context.fillStyle = "red";
        this.context.fill();
    }
    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}

export default Blob