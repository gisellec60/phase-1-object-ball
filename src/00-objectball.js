const gameObject = () => {
    return {
        home: { 
            teamName: "Brooklyn Nets",
            colors: ["Black","White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamdunks:1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamdunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunk:15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamdunks:5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamdunks:1
                }
            }

        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamdunks:2
                },
                "Bismark Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamdunks:10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamdunks:5
                },
                "Ben Gordam": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamdunks:0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamdunks:12
                }
            }
       }
    } 
}

const numPointScored = (name) => {
  let game = gameObject();
  for (let gameKey in game) {  // get key from object which are home and away
     let teamObj = game[gameKey] 
       debugger
      for (let objKey in teamObj) {
          debugger
          if (objKey === "players") {
              let value = Object.entries(teamObj[objKey][name] || {} )
              for(let i = 0; i < value.length; i++){
                  if (value[i][0] === "points") {
                       return value[i][1]
                  }
              }
          }
        }
    } 
}
// numPointScored("Alan Anderson");
const shoeSize = (name) => {
  let game = gameObject();
  for (let gameKey in game) {  // get key from object which are home and away
     let teamObj = game[gameKey] 
       debugger
      for (let objKey in teamObj) {
          debugger
          if (objKey === "players") {
              let value = Object.entries(teamObj[objKey][name] || {})
              for(let i = 0; i < value.length; i++){
                  if (value[i][0] === "shoe") {
                    return value[i][1]
                  }
              }
          }
        }
    } 
}

const teamColors = (name) => {
  let game = gameObject();
  for (let gameKey in game) {  // get key from object which are home and away
     let teamObj = game[gameKey] 
     for (let objKey in teamObj) {
        if (objKey === "teamName") {
          if (teamObj[objKey] === name) {
             let colors =teamObj["colors"]
             return colors
           }
        }
     }
    } 
}

const teamNames = () => {
  let name = [];
  let game = gameObject();
  for (let gameKey in game) {  // get key from object which are home and away
     let teamObj = game[gameKey] 
     for (let objKey in teamObj) {
        if (objKey === "teamName") {
             name.push(teamObj[objKey])
        }
     }
    } 
  return name
}

const playerNumbers = (teamName) => {
  let numbers = [];
  let game = gameObject();
  for (let gameKey in game) {  // get key from object which are home and away
     let teamObj = game[gameKey] 
     for (let objKey in teamObj) {
        if (teamObj[objKey] === teamName ) {
          for (let key in teamObj){
            if (key === "players"){
              let value = Object.entries(teamObj[key])
              for (let i =0; i < value.length; i++){
                 let value2 = value[i][1] 
                 numbers.push(value2.number)
             }
           }    
          }
       }
     }
  } 
  return numbers;
}

function playerStats(name) {
    let game = gameObject();
    for (let gameKey in game) { // get key from object which are home and away
        let teamObj = game[gameKey];
        for (let objKey in teamObj) {
            if (objKey === "players") {
                let value = teamObj[objKey][name];
                return value;
            }
        }
    }
}    
 
const bigShoeRebounds = () => {
  let bigShoe = 0;
  let rebounds=0;
  let game = gameObject();
  for (const gameKey in game) {  // get key from object which are home and away
     // console.log(gameKey)
     const teamObj = game[gameKey]
     for (const team in teamObj ){
      // console.log(team)
         const teamInfo = teamObj[team]
         for (const players in teamInfo){
           //  console.log(teamInfo[players])
           let value =  Object.values(teamInfo[players]) 
           let value2 = value[1]
           for (let i=0; i< value.length; i++){
            // console.log("this is ", value2)
             if (value2 > bigShoe) {
               bigShoe=value2;
               rebounds=value[3]
             //  console.log ("this is bigShoe: ", bigShoe, rebounds)
             }
           }
        }  
     }
  }
  return rebounds;
}// playerStats ("Alan Anderson")

/*
const homeTeamName = () => {
    let object = gameObject();
    return object["home"]["teamName"]
}

console.log(homeTeamName())

function homeTeamName1() {
  return gameObject()["home"]["teamName"];
}

console.log(homeTeamName1());

*/