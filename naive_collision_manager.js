class CollisionManager {
    constructor(args = {}) {
        this.collideables = []
        this.collideablePairs = []
    }

    addCollidables(collideables) {
        this.collideables = this.collideables.concat(collideables)
        this.calcCollideablePairs()
    }

    checkFieldsOfVision() {
        this.collideablePairs.forEach(pair => {
            if (this.distanceSquared(pair) <= (pair[0].visionRadius + pair[1].radius)*(pair[0].visionRadius + pair[1].radius)){
                let relativeDirection = {}
                let relativeNormal = {}
                let sign = {}
                if (pair[0].radius > pair[1].radius){
                    console.log("should pursue")
                    relativeDirection = {x: pair[0].position.x - pair[1].position.x, y: pair[0].position.y - pair[1].position.y}
                    sign.x = relativeDirection.x < 0 ? 1 : -1
                    sign.y = relativeDirection.y < 0 ? 1 : -1
                    let magnitudeDenominator = relativeDirection.x * relativeDirection.x + relativeDirection.y * relativeDirection.y
                    relativeNormal.x = relativeDirection.x * relativeDirection.x / magnitudeDenominator * sign.x
                    relativeNormal.y = relativeDirection.y * relativeDirection.y / magnitudeDenominator * sign.y
                    pair[0].speed.x = relativeNormal.x * pair[0].speed.magnitude
                    pair[0].speed.y = relativeNormal.y * pair[0].speed.magnitude
                    pair[1].speed.x = relativeNormal.x * pair[0].speed.magnitude
                    pair[1].speed.x = relativeNormal.x * pair[0].speed.magnitude
                }
                else if (pair[0].radius < pair[1].radius){
                }
            }
        })
    }



    detectCollisions() {
        this.collideablePairs.forEach(pair => {
            if (this.distanceSquared(pair) < (pair[0].radius + pair[1].radius)*(pair[0].radius + pair[1].radius)){
                // if (pair[0].radius >= pair[1].radius)
                    // pair[1].color = pair[0].color
                // else
                    // pair[0].color = pair[1].color
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
                pairs.push([this.collideables[i], this.collideables[j]])}
        this.collideablePairs =  pairs.filter(pair => pair[0].tribe != pair[1].tribe);
    }
}

export default CollisionManager