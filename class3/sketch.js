let balls = [];

class Ball{
    constructor(){
        this.x = random(0, 500);
        this.y = random(0, 500)
    }

    render(){
        fill(255)
        ellipse(this.x, this.y, 10)
    }
}
function setup(){
    createCanvas(500, 500)

    for (let x = 0; x <5 ; x++){

    }
}
    
