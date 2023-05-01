const Player = (name, symbol) => {
  return { name, symbol };
};

const Game = (() => {
  let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const isEqual = (a, b, c) => {
    return a == b && b == c;
  };
  const playTurn = (player, cell) => {
    if (gameboard[cell.row][cell.col] != "") return false;
    gameboard[cell.row][cell.col] = player.symbol;
    cell.textContent = player.symbol;
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
  return { playTurn, switchTurn, findWinner, reset, over };
})(document);

const gameboard_container = document.getElementById("gameboard_container");
const winning_screen = document.getElementById("winner_screen");
const winning_screen_content = document.querySelector(
  "#winner_screen .content"
);
const replay_button = document.getElementById("replayButton");
console.log(winning_screen_content);
let p1_name = prompt("Enter player 1 name");
let p2_name = prompt("Enter player 2 name");
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
      let winner = Game.findWinner(p1, p2);
      if (winner != "") {
        winning_screen_content.textContent = `Winner is ${winner}`;
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
  currPlayer = p1;
  winning_screen.classList.remove("active");
});
