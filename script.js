const Player = (name, symbol, isAI) => {
  return { name, symbol, isAI };
};

const Game = (() => {
  let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let firstPlayer;
  const isEqual = (a, b, c) => {
    return a == b && b == c;
  };
  const playTurn = (player, cell) => {
    if (cell == null) return p1.isAI || p2.isAI;
    if (gameboard[cell.row][cell.col] != "") return false;
    gameboard[cell.row][cell.col] = player.symbol;
    let div = document.createElement("div");
    if (player.symbol == "X") {
      // div.innerHTML = '<img src="/assets/X.png" alt="X" class="symbol">';
      cell.innerHTML = '<img src="/assets/X.png" alt="X" class="symbol">';
    } else if (player.symbol == "O") {
      // div.innerHTML = '<img src="/assets/O.png" alt="O" class="symbol">';
      cell.innerHTML = '<img src="/assets/O.png" alt="O" class="symbol">';
    }
    // div.textContent = player.symbol;
    // cell.appendChild(div);
    return true;
  };
  const switchTurn = (currPlayer, p1, p2) => (currPlayer == p1 ? p2 : p1);
  const findWinner = (p1, p2) => {
    for (let i = 0; i < 3; i++) {
      if (
        isEqual(gameboard[i][0], gameboard[i][1], gameboard[i][2]) &&
        gameboard[i][0] != ""
      ) {
        victoryTiles(3 * i, 3 * i + 1, 3 * i + 2);
        console.log(i, 0);
        lineAnimation(i, "horizontal");
        return gameboard[i][0] == p1.symbol ? p1.name : p2.name;
      }
      if (
        isEqual(gameboard[0][i], gameboard[1][i], gameboard[2][i]) &&
        gameboard[0][i] != ""
      ) {
        victoryTiles(3 * i, 3 * (i + 1), 3 * (i + 2));
        console.log(0, i);
        lineAnimation(i, "vertical");
        return gameboard[0][i] == p1.symbol ? p1.name : p2.name;
      }
    }
    if (
      isEqual(gameboard[0][0], gameboard[1][1], gameboard[2][2]) &&
      gameboard[0][0] != ""
    ) {
      victoryTiles(0, 4, 8);
      console.log("cross");
      lineAnimation(0, "cross");
      return gameboard[0][0] == p1.symbol ? p1.name : p2.name;
    }
    if (
      isEqual(gameboard[0][2], gameboard[1][1], gameboard[2][0]) &&
      gameboard[0][2] != ""
    ) {
      victoryTiles(2, 4, 6);
      console.log("reverse cross");
      lineAnimation(2, "cross");
      return gameboard[0][2] == p1.symbol ? p1.name : p2.name;
    }
    return "";
  };
  const AI_child = () => {
    let possibleChildren = [];
    for (
      let child = gameboard_container.firstChild, counter = 0;
      child !== null;
      child = child.nextSibling
    ) {
      if (child.tagName == "DIV" && child.childNodes.length == 0)
        possibleChildren.push(child);
    }
    if (possibleChildren.length == 0) return null;
    return possibleChildren[
      Math.floor(Math.random() * possibleChildren.length)
    ];
  };
  const reset = (gameboard_container) => {
    for (let row = 0; row < 3; row++)
      for (let col = 0; col < 3; col++) gameboard[row][col] = "";
    for (
      let child = gameboard_container.firstChild, counter = 0;
      child !== null;
      child = child.nextSibling
    ) {
      if (child.tagName == "DIV") {
        child.textContent = "";
      }
    }
  };
  const over = () => {
    let countEmpty = 0;
    for (let row = 0; row < 3; row++)
      for (let col = 0; col < 3; col++) countEmpty += gameboard[row][col] == "";
    return countEmpty == 0;
  };
  return {
    gameboard,
    isEqual,
    playTurn,
    switchTurn,
    findWinner,
    reset,
    over,
    firstPlayer,
    AI_child,
  };
})(document);

const AI = (() => {
  let copiedGameboard;
  let findBestMove = (gameboard, AIsSymbol) => {
    copiedGameboard = JSON.parse(JSON.stringify(gameboard));
    let result = minmax(true, AIsSymbol, copiedGameboard);
    return result.bestRow * 3 + result.bestCol;
  };
  function minmax(AIsMove, AIsSymbol) {
    let winnerSymbol = gameWinnerSymbol(copiedGameboard);
    let val = AIsMove ? -10 : 10;
    let bestRow, bestCol;
    if (winnerSymbol != "" || boardFilled(copiedGameboard)) {
      if (winnerSymbol == AIsSymbol) val = 1;
      else if (winnerSymbol != "") val = -1;
      else val = 0;
      return { bestRow, bestCol, val };
    }
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (copiedGameboard[row][col] == "") {
          copiedGameboard[row][col] = AIsMove
            ? AIsSymbol
            : AIsSymbol == "X"
            ? "O"
            : "X";
          let currPoints = minmax(!AIsMove, AIsSymbol).val;
          if ((AIsMove && currPoints > val) || (!AIsMove && currPoints < val)) {
            val = currPoints;
            bestRow = row;
            bestCol = col;
          }
          copiedGameboard[row][col] = "";
        }
      }
    }
    return { bestRow, bestCol, val };
  }
  function gameWinnerSymbol(gameboard) {
    for (let i = 0; i < 3; i++) {
      if (
        Game.isEqual(gameboard[i][0], gameboard[i][1], gameboard[i][2]) &&
        gameboard[i][0] != ""
      )
        return gameboard[i][0];
      if (
        Game.isEqual(gameboard[0][i], gameboard[1][i], gameboard[2][i]) &&
        gameboard[0][i] != ""
      )
        return gameboard[0][i];
    }
    if (
      Game.isEqual(gameboard[0][0], gameboard[1][1], gameboard[2][2]) &&
      gameboard[0][0] != ""
    )
      return gameboard[0][0];
    if (
      Game.isEqual(gameboard[0][2], gameboard[1][1], gameboard[2][0]) &&
      gameboard[0][2] != ""
    )
      return gameboard[0][2];
    return "";
  }
  function boardFilled(gameboard) {
    let countEmpty = 0;
    for (let row = 0; row < 3; row++)
      for (let col = 0; col < 3; col++) countEmpty += gameboard[row][col] == "";
    return countEmpty == 0;
  }
  return { findBestMove };
})();

function nthDivChild(n, container) {
  for (
    let child = container.firstChild, counter = 0;
    child !== null;
    child = child.nextSibling
  ) {
    if (child.tagName == "DIV") {
      if (n == counter) return child;
      counter++;
    }
  }
  return null;
}

function victoryTiles(first, second, third) {
  gameboard_container
    .getElementsByTagName("div")
    [first].classList.add("victory-tile");
  gameboard_container
    .getElementsByTagName("div")
    [second].classList.add("victory-tile");
  gameboard_container
    .getElementsByTagName("div")
    [third].classList.add("victory-tile");
}

function clearGreenTiles() {
  const victory_tiles = gameboard_container.querySelectorAll(".victory-tile");
  victory_tiles.forEach((element) => {
    element.classList.remove("victory-tile");
  });
}

function lineAnimation(i, direction) {
  if (direction === "horizontal") {
    switch (i) {
      case 0:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 48vh; background-color: black; transform: translateX(6vh) translateY(22vh)";
        break;
      case 1:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 48vh; background-color: black; transform: translateX(6vh) translateY(42vh)";
        break;
      case 2:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 48vh; background-color: black; transform: translateX(6vh) translateY(62vh)";
        break;
    }
  } else if (direction === "vertical") {
    switch (i) {
      case 0:
        line.style =
          "position: absolute; z-index: 2; height: 48vh; width: 4px; background-color: black; transform: translateX(10vh) translateY(18vh)";
        break;
      case 1:
        line.style =
          "position: absolute; z-index: 2; height: 48vh; width: 4px; background-color: black; transform: translateX(30vh) translateY(18vh)";
        break;
      case 2:
        line.style =
          "position: absolute; z-index: 2; height: 48vh; width: 4px; background-color: black; transform: translateX(50vh) translateY(18vh)";
        break;
    }
  } else {
    switch (i) {
      case 0:
        line.style =
          "position: absolute; z-index: 2; height: 63vh; width: 4px; background-color: black; transform: translateX(30vh) translateY(11vh) rotate(135deg);";
        break;
      case 2:
        line.style =
          "position: absolute; z-index: 2; height: 68vh; width: 4px; background-color: black; transform: translateX(30vh) translateY(8vh) rotate(45deg);";
        break;
    }
  }
}

const removeAttributes = (line) => {
  while (line.attributes.length > 0) {
    line.removeAttribute(line.attributes[0].name);
  }
};

const gameboard_container = document.getElementById("gameboard_container");
const winning_screen = document.getElementById("winner_screen");
const landing_page = document.getElementById("landing_page");
const line = document.getElementById("line");
const winning_screen_content = document.querySelector(
  "#winner_screen .content"
);
const replay_button = document.getElementById("replayButton");
const submission_button = document.getElementById("submission_button");
const switch_side_button = document.getElementById("switchSideButton");
const player_turn = document.querySelector(".player_turn");
console.log(winning_screen_content);
let p1_name = document.getElementById("p1").value;
let p2_name = document.getElementById("p2").value;
let p1, p2;
let currPlayer = p1;

for (
  let child = gameboard_container.firstChild, counter = 0;
  child !== null;
  child = child.nextSibling
) {
  if (child.tagName == "DIV") {
    child.row = Math.floor(counter / 3);
    child.col = counter % 3;
    counter++;
    child.addEventListener("click", () => {
      if (!Game.playTurn(currPlayer, child)) return;
      currPlayer = Game.switchTurn(currPlayer, p1, p2);
      if (currPlayer.isAI && !(Game.findWinner(p1, p2) != "" || Game.over())) {
        Game.playTurn(
          currPlayer,
          nthDivChild(
            AI.findBestMove(Game.gameboard, currPlayer.symbol),
            gameboard_container
          )
        );
        if (!(Game.findWinner(p1, p2) != "" || Game.over()))
          currPlayer = Game.switchTurn(currPlayer, p1, p2);
      }
      player_turn.textContent = `${currPlayer.name}'s turn`;
      let winner = Game.findWinner(p1, p2);
      if (winner != "") {
        winning_screen_content.textContent = `Winner is "${winner}"`;
        winning_screen.classList.add("active");
      } else if (Game.over()) {
        winning_screen_content.textContent = `IT IS A TIE`;
        winning_screen.classList.add("active");
      }
    });
  }
}

replay_button.addEventListener("click", () => {
  Game.reset(gameboard_container);
  currPlayer = Game.firstPlayer;
  if (currPlayer.isAI) {
    Game.playTurn(
      currPlayer,
      nthDivChild(
        AI.findBestMove(Game.gameboard, currPlayer.symbol),
        gameboard_container
      )
    );
    currPlayer = Game.switchTurn(currPlayer, p1, p2);
  }
  player_turn.textContent = `${currPlayer.name}'s turn`;
  winning_screen.classList.remove("active");

  //clearing the green tiles
  clearGreenTiles();
  removeAttributes(line);
});

submission_button.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementById("two_player_game").checked) {
    p1_name = document.getElementById("p1").value;
    p2_name = document.getElementById("p2").value;
    p1 = Player(p1_name, "X", false);
    p2 = Player(p2_name, "O", false);
  } else {
    p1_name = document.getElementById("p1").value;
    p1 = Player(p1_name, "X", false);
    p2 = Player("AI", "O", true);
  }
  currPlayer = p1;
  Game.firstPlayer = p1;
  landing_page.classList.remove("active");
  player_turn.textContent = `${currPlayer.name}'s turn`;
});

switch_side_button.addEventListener("click", (e) => {
  Game.reset(gameboard_container);
  Game.firstPlayer = Game.firstPlayer == p1 ? p2 : p1;
  p1.symbol = Game.firstPlayer == p1 ? "X" : "O";
  p2.symbol =
    p2.symbol == p1.symbol ? (p1.symbol == "X" ? "O" : "X") : p2.symbol;
  currPlayer = Game.firstPlayer;
  if (currPlayer.isAI) {
    Game.playTurn(
      currPlayer,
      nthDivChild(
        AI.findBestMove(Game.gameboard, currPlayer.symbol),
        gameboard_container
      )
    );
    currPlayer = Game.switchTurn(currPlayer, p1, p2);
  }
  player_turn.textContent = `${currPlayer.name}'s turn`;
  winning_screen.classList.remove("active");
  //clearing the green tiles
  clearGreenTiles();
  removeAttributes(line);
});

document.getElementById("ai_game").addEventListener("click", () => {
  document.getElementById("p2").disabled = true;
});

document.getElementById("two_player_game").addEventListener("click", () => {
  document.getElementById("p2").disabled = false;
});

window.onload = (event) => {
  landing_page.classList.add("active");
};
