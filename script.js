const Gameboard = ((document) => {
  const gameboard_container = document.getElementById("gameboard_container");

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
        child.addEventListener("click", function (child) {
          console.log(this.row, this.col);
        });
      }
    }
  })();

  gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
})(document);
