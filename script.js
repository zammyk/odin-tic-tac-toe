const Player = (name, symbol) => {
  return { name, symbol };
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
    if (gameboard[cell.row][cell.col] != "") return false;
    gameboard[cell.row][cell.col] = player.symbol;
    let div = document.createElement("div");
    div.textContent = player.symbol;
    cell.appendChild(div);
    return true;
  };
  const switchTurn = (currPlayer, p1, p2) => (currPlayer == p1 ? p2 : p1);
  const findWinner = (p1, p2) => {
    for (let i = 0; i < 3; i++) {
      if (
        isEqual(gameboard[i][0], gameboard[i][1], gameboard[i][2]) &&
        gameboard[i][0] != ""
      )
        return gameboard[i][0] == p1.symbol ? p1.name : p2.name;
      if (
        isEqual(gameboard[0][i], gameboard[1][i], gameboard[2][i]) &&
        gameboard[0][i] != ""
      )
        return gameboard[0][i] == p1.symbol ? p1.name : p2.name;
    }
    if (
      isEqual(gameboard[0][0], gameboard[1][1], gameboard[2][2]) &&
      gameboard[0][0] != ""
    )
      return gameboard[0][0] == p1.symbol ? p1.name : p2.name;
    if (
      isEqual(gameboard[0][2], gameboard[1][1], gameboard[2][0]) &&
      gameboard[0][2] != ""
    )
      return gameboard[0][2] == p1.symbol ? p1.name : p2.name;
    return "";
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
  return { playTurn, switchTurn, findWinner, reset, over, firstPlayer };
})(document);

const gameboard_container = document.getElementById("gameboard_container");
const winning_screen = document.getElementById("winner_screen");
const landing_page = document.getElementById("landing_page");
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
let p1 = Player(p1_name, "X");
let p2 = Player(p2_name, "O");
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
      player_turn.textContent = `${currPlayer.name}'s turn`;
      let winner = Game.findWinner(p1, p2);
      if (winner != "") {
        winning_screen_content.textContent = `Winner is "${winner}"`;
        winning_screen.classList.add("active");
      }
      if (Game.over()) {
        winning_screen_content.textContent = `IT IS A TIE`;
        winning_screen.classList.add("active");
      }
    });
  }
}

replay_button.addEventListener("click", () => {
  Game.reset(gameboard_container);
  currPlayer = Game.firstPlayer;
  player_turn.textContent = `${currPlayer.name}'s turn`;
  winning_screen.classList.remove("active");
});

submission_button.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementById("two_player_game").checked) {
    p1_name = document.getElementById("p1").value;
    p2_name = document.getElementById("p2").value;
    p1 = Player(p1_name, "X");
    p2 = Player(p2_name, "O");
    Game.firstPlayer = p1;
  } else {
    p1_name = document.getElementById("p1").value;
    p1 = Player(p1_name, "X");
    p2 = Player("AI", "O");
  }
  currPlayer = p1;
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
  player_turn.textContent = `${Game.firstPlayer.name}'s turn`;
  winning_screen.classList.remove("active");
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
