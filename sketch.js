console.log("test")

// defining arrays
let names = ["Marlon", "Ben", "Dan", "Laura", "Bob", "Jen", "James", "Mark", "Max"];
let conditions = ["Healthy", "Unhealthy", "Critical Condition", "Athlete"];
let genders = ["Male", "Female"];
let infected = [true, false]

let person = [];

let numberOfPeople = 100;

// let rAge = Math.round((Math.random() * 40)) +30
// let rAgeP5 = int(random(30,70)); MUST BE IN DRAW

function setup(){
    createCanvas(500, 500);
    

    for(let x = 0; x < numberOfPeople; x++){
        // randomizes each loop
        let randomName = names[Math.floor(Math.random()*names.length)];
        let randomCondition = conditions[Math.floor(Math.random()*conditions.length)];
        let randomGender = genders[Math.floor(Math.random()*genders.length)];
        let randomInfected = infected[Math.floor(Math.random()*infected.length)];
        let randomAge = Math.floor(Math.random()* 100);
        let randomXpos = Math.floor(Math.random() * 500);
        let randomYpos = Math.floor(Math.random() * 500);

        person.push(new CreatePerson(
            randomName, randomAge, randomGender, randomCondition, randomXpos, randomYpos, randomInfected
        ))
    }


    let mapped = person.map(
        object => object.age)

        console.log(mapped)
}

    function draw(){
        background(50);

        for(let x = 0; x < numberOfPeople; x++){
        person[x].render();
        console.log(person[x])
        }
        

        noLoop();
    }
