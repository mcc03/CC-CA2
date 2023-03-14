class CreatePerson{
    constructor(
        _name,
        _age,
        _gender,
        _condition,
        _posX,
        _posY,
        _infected
    ){

        this.name = _name;
        this.age = _age;
        this.gender = _gender;
        this.condition = _condition;
        this.posX = _posX;
        this.posY = _posY;
        this.infected = _infected;
}

    render(){
        this.circlePeople();
    }

    circlePeople(){

        let randomXpos = Math.floor(Math.random() * 500);
        let randomYpos = Math.floor(Math.random() * 500);
        let randomAge = Math.floor(Math.random()* 100);

        for(let x = 0; x < person.length; x++){
            if(this.gender == "Male"){
                fill(0,100,250)
            } else {
                fill(255, 192, 203)
            }

            if(person[x])

            ellipse(randomXpos, randomYpos, 25)
            fill(0);
            noStroke();
            textStyle(BOLD);
            textAlign(CENTER);
            text(randomAge, randomXpos, randomYpos+5)     
        }
    }
}

