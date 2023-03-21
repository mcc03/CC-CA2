let luasOriginal;
let luasTidy = [];

function preload(){
    luasOriginal = loadTable('./data/LUAS_Flow.csv', 'csv', 'header')
}

let officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

  let pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  let factions = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];
  

function setup(){
    // mapping to only show officer ids
    let newOfficers = officers.map(officer => officer.id);
    console.log(newOfficers);

    // Filter to show seperate arrays
    let rebels = factions.filter(person => person.faction == "Rebels")
    console.log(rebels);

    let empirials = factions.filter(person => person.faction == "Empire")
    console.log(empirials);

    for(let x = 0;x < luasOriginal.getRowCount(); x++){
        luasTidy.push(luasOriginal.rows[x].obj)
    }
    console.log(luasTidy);

    // filtering to get two specified values
    let redLuas = luasTidy.filter(row => row["Statistic Label"] == "Average Red Line Flow" && row["Year"] == "2018");
    
    // taking the filter and mapping it and returning an object
    redLuas = redLuas.map(row => (
        {
            day: row['Days of Week'],
            value: +row.VALUE
        }
    ));

    // adding value properties of each object together from the array of objects
    let totalPassengers2018 = redLuas.reduce(
        (accumulator, row) => { return accumulator + row.value;}, 0)

        console.log("Total Passengers in 2018:", totalPassengers2018);
        console.log(redLuas);

    // adds up pilot years of experience
    let pilotExperience = pilots.reduce(
        (yearsOfExp, row) => {return yearsOfExp + row.years;}, 0)

        console.log(pilotExperience);

    // finds and returns the object with the highest value of years, using reduce
    let mostExperience = pilots.reduce(
        (experienced, row) => {return (experienced.years || 0) > row.years? experienced:row}, pilots[0])
        console.log(mostExperience);
}

function draw(){



}

