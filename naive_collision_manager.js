class CollisionManager {
    constructor(args = {}) {
        this.collideables = []
        this.collideablePairs = []
    }

    addCollidables(collideables) {
        this.collideables = this.collideables.concat(collideables)
        this.calcCollideablePairs()
    }

    detectCollisions() {
        this.collideablePairs.forEach(pair => {
            if (this.distanceSquared(pair) < (pair[0].radius + pair[1].radius)*(pair[0].radius + pair[1].radius)){
                console.log("collision")
                if (pair[0].radius >= pair[1].radius)
                    pair[1].color = pair[0].color
                else
                    pair[0].color = pair[1].color
            }
        })
    }

    distanceSquared(pair){
        let x0 = pair[0].position.x
        let x1 = pair[1].position.x
        let y0 = pair[0].position.y
        let y1 = pair[1].position.y
        return ((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0))
    }

    calcCollideablePairs() {
        let pairs = []
        const l = this.collideables.length;
        for (let i = 0; i < l; ++i)
            for (let j = i + 1; j < l; ++j){
                //console.log(this.collideables[i])
                //console.log(this.collideables[j])
                pairs.push([this.collideables[i], this.collideables[j]])}
        // console.log(pairs)
        this.collideablePairs =  pairs.filter(pair => pair[0].tribe != pair[1].tribe);
    }
}

export default CollisionManager