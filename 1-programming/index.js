class Player {
  constructor(id) {
    this.id = id;
    this.dice = [];
    this.points = 0;
  }

  rollDice(numberOfDice) {
    this.dice = [];
    for (let i = 0; i < numberOfDice; i++) {
      this.dice.push(Math.floor(Math.random() * 6) + 1);
    }
  }

  evaluateDice(nextPlayer) {
    let remainingDice = [];
    for (let die of this.dice) {
      if (die === 6) {
        this.points++;
      } else if (die === 1) {
        nextPlayer.dice.push(1);
      } else {
        remainingDice.push(die);
      }
    }
    this.dice = remainingDice;
  }
}

function printPlayerStatus(players) {
  for (let player of players) {
    if (player.dice.length === 0) {
      console.log(
        `Pemain #${player.id} (${player.points}): (Berhenti bermain karena tidak memiliki dadu)`
      );
    } else {
      console.log(
        `Pemain #${player.id} (${player.points}): ${player.dice.join(",")}`
      );
    }
  }
}

function playGame(n, m) {
  let players = [];
  for (let i = 0; i < n; i++) {
    let player = new Player(i + 1);
    player.rollDice(m);
    players.push(player);
  }

  let round = 1;
  while (players.filter((player) => player.dice.length > 0).length > 1) {
    console.log(`==================`);
    console.log(`Giliran ${round} lempar dadu:`);

    for (let player of players) {
      if (player.dice.length > 0) {
        player.rollDice(player.dice.length);
      }
    }

    printPlayerStatus(players);

    console.log(`Setelah evaluasi:`);

    for (let i = 0; i < players.length; i++) {
      let player = players[i];
      if (player.dice.length > 0) {
        let nextPlayer = players[(i + 1) % players.length];
        player.evaluateDice(nextPlayer);
      }
    }

    printPlayerStatus(players);

    round++;
  }

  console.log(`==================`);
  let remainingPlayers = players.filter((player) => player.dice.length > 0);
  if (remainingPlayers.length === 1) {
    console.log(
      `Pemain terakhir yang masih memiliki dadu adalah pemain #${remainingPlayers[0].id}.`
    );
  }

  console.log(`Game berakhir karena hanya satu pemain yang memiliki dadu.`);

  let winner = players.reduce((prev, curr) =>
    curr.points > prev.points ? curr : prev
  );
  console.log(
    `Game dimenangkan oleh pemain #${winner.id} karena memiliki poin lebih banyak dari pemain lainnya.`
  );
}

playGame(3, 4);
