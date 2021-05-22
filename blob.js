class Blob {
    constructor(args) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.position = args.position
        this.speed = args.speed
        this.color = args.color
        this.birthTime = Date.now()
        this.pulsePhase = 0
    }

    render() {
        this.ctx.beginPath();
        // this.ctx.arc(this.position.x, this.position.y, 20, 0, Math.PI * 2);
        // this.ctx.fillStyle = "red";
        // this.ctx.fill();
        //
        let
            innerRadius = 2,
            outerRadius = 20,
            radius = 20;

        let gradient = this.ctx.createRadialGradient(this.position.x, this.position.y,
            innerRadius, this.position.x, this.position.y, outerRadius);
        gradient.addColorStop(0, 'white');
        // gradient.addColorStop(this.pulseState, '#540101');
        gradient.addColorStop(this.pulseState   , this.color);
        // gradient.addColorStop(0.7, 'green');
        gradient.addColorStop(1, '#00000000')
        this.ctx.arc(this.position.x, this.position.y, radius, 0, 2 * Math.PI);
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
        this.pulsePhase = (Date.now() - this.birthTime) % 2000 > 1000
        this.pulseState = Math.abs(this.pulsePhase - ((Date.now() - this.birthTime) % 1000) / 1000)
        this.pulseState = this.pulseState * 0.5
    }
}

export default Blob