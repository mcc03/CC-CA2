let balls = [];


class Ball{
    constructor(){
        this.x = random(0, 500);
        this.y = random(0, 500);
        this.index = 0;
    }

    render(){
        fill(255)
        ellipse(this.x, this.y, 10);    
    }
}

function setup(){
    createCanvas(500, 500)

    for (let x = 0; x <5 ; x++){
        balls.push(new Ball())
    }
}
    
function draw(){
    background(50);
    noLoop();

 
    for (let x = 0; x < balls.length ; x++){ 
        for (let i = x + 1; i < balls.length; i++){
            // diff of Xs
            let diffX = balls[x].x - balls[i].x
            // diff of Ys
            let diffY = balls[x].y - balls[i].y
            // calc distance
            let distance = Math.sqrt((diffX * diffX), + (diffY * diffY))

            
            text(distance.toFixed(0), 25*i, 25*x)

            // displays checked distances for each ball
            console.log("Distance between ellipses " + x + " and " + i + " " + distance);
        }

    balls[x].render();
    }
}

