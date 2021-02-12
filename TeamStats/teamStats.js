let team ={
    _players: [{
      firstName: 'Ericson',
      lastName: 'Ham',
      age:18},
      {
      firstName: 'Steven',
      lastName: 'Back',
      age:19
      },{   
      firstName: 'Patrick',
      lastName: 'Sindibad',
      age:17}
    ],
    _games: [
      {
        oponnent: 'Broncos',
        teamPoints: 50,
        opponentPoints: 29,
      },
         {
        oponnent: 'Broncos',
        teamPoints: 50,
        opponentPoints: 29,
      },
         {
        oponnent: 'Broncos',
        teamPoints: 50,
        opponentPoints: 29,
      }
    ],
    get players() {
      return {firstName: this._players.firstName,
      lastName: this._players.lastName,
      age: this._players.age}
    },
    get games() {
      return {opponent: this._games.opponent,
      teamPoints: this._games.teamPoints,
      opponentPoints: this._games.opponentPoints}
  },
    addPlayer(firstName,lastName,age) {
      let player = {firstName: firstName, lastName: lastName, age: age}
       this._players.push(player);
    },
    addGame(opponent,teamPoints,opponentPoints){
      let game = {opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints};
      team._games.push(game);
    }
  };
  
  team.addPlayer("Steph","Curry", 28);
  team.addPlayer("Lisa","Leslie", 44);
  team.addPlayer("Bugs","Bunny",76);
  
  console.log(team._players)
  
  team.addGame("Croatia","France",33);
  team.addGame("Portugal","Spain",28);
  team.addGame("England","Germany",31);
  
  console.log(team._games)