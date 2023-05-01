const Player = (name, symbol) => {
  return { name, symbol };
};

const Game = ((document) => {
  let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const p1 = Player("Rahul", "X");
  const p2 = Player("Caro", "O");

  let currPlayer = p1;
  const gameboard_container = document.getElementById("gameboard_container");

  const switchCurrPlayer = () => {
    if (currPlayer === p1) currPlayer = p2;
    else currPlayer = p1;
  };

  const playTurn = (cell) => {
    if (gameboard[cell.row][cell.col] != "") return;
    gameboard[cell.row][cell.col] = currPlayer.symbol;
    cell.textContent = currPlayer.symbol;
  };

  (() => {
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
          playTurn(child);
          switchCurrPlayer();
        });
      }
    }
  })();
})(document);
