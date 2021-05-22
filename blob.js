class Blob {
    constructor(args) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.position = args.position
        this.size = args.size ? args.size: 20
        this.speed = args.speed
        this.color = args.color
        this.birthTime = Date.now()
        this.pulseInterval = 1000
    }

    render() {
        this.ctx.beginPath();
        let innerRadius = 2,
            outerRadius = this.size
        let gradient = this.ctx.createRadialGradient(this.position.x, this.position.y,
            innerRadius, this.position.x, this.position.y, outerRadius);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(this.pulseState, this.color);
        gradient.addColorStop(1, '#00000000')
        this.ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        this.ctx.fillStyle = gradient;
        this.ctx.fill()
        this.ctx.closePath();

    }

    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
        if (this.position.x > this.canvas.width || this.position.x < 0)
            this.speed.x *= -1
        if (this.position.y > this.canvas.height || this.position.y < 0)
            this.speed.y *= -1
         let pulsePhase = (Date.now() - this.birthTime) % (this.pulseInterval*2) > this.pulseInterval
        this.pulseState = Math.abs(pulsePhase - ((Date.now() - this.birthTime) % this.pulseInterval) / this.pulseInterval)
        this.pulseState = this.pulseState * 0.4
    }
}

export default Blob