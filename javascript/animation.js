//Docs for switch-case
// case 0: (0, 1, 2)
// case 1: (3, 4, 5)
// case 2: (6, 7, 8)
// case 3: (0, 3, 6)
// case 4: (1, 4, 7)
// case 5: (2, 5, 8)
// case 6: (0, 4, 8)
// case 7: (2, 4, 6)

//Line-crossing animation
export default function lineAnimation(i, screenWidth) {
  if (screenWidth.matches) {
    switch (i) {
      case 0:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 13rem; background: linear-gradient(90deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 200% 100%; animation: horizontal 2s; transform: translateX(1rem) translateY(8.1rem)";
        break;
      case 1:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 13rem; background: linear-gradient(90deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 200% 100%; animation: horizontal 2s; transform: translateX(1rem) translateY(13.1rem)";
        break;
      case 2:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 13rem; background: linear-gradient(90deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 200% 100%; animation: horizontal 2s; transform: translateX(1rem) translateY(18.1rem)";
        break;
      case 3:
        line.style =
          "position: absolute; z-index: 2; height: 13rem; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(2.4rem) translateY(7rem)";
        break;
      case 4:
        line.style =
          "position: absolute; z-index: 2; height: 13rem; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(7.4rem) translateY(7rem)";
        break;
      case 5:
        line.style =
          "position: absolute; z-index: 2; height: 13rem; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(12.4rem) translateY(7rem)";
        break;
      case 6:
        line.style =
          "position: absolute; z-index: 2; height: 18.2rem; width: 4px; background: linear-gradient(0deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 100% 200%; animation: diagonal 2s; transform: translateX(7.5rem) translateY(4.3rem) rotate(135deg);";
        break;
      case 7:
        line.style =
          "position: absolute; z-index: 2; height: 18.2rem; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(7.5rem) translateY(4.3rem) rotate(45deg);";
        break;
    }
  } else {
    switch (i) {
      case 0:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 48vh; background: linear-gradient(90deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 200% 100%; animation: horizontal 2s; transform: translateX(6vh) translateY(22vh)";
        break;
      case 1:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 48vh; background: linear-gradient(90deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 200% 100%; animation: horizontal 2s; transform: translateX(6vh) translateY(42vh)";
        break;
      case 2:
        line.style =
          "position: absolute; z-index: 2; height: 4px; width: 48vh; background: linear-gradient(90deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 200% 100%; animation: horizontal 2s; transform: translateX(6vh) translateY(62vh)";
        break;
      case 3:
        line.style =
          "position: absolute; z-index: 2; height: 48vh; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(10vh) translateY(18vh)";
        break;
      case 4:
        line.style =
          "position: absolute; z-index: 2; height: 48vh; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(30vh) translateY(18vh)";
        break;
      case 5:
        line.style =
          "position: absolute; z-index: 2; height: 48vh; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(50vh) translateY(18vh)";
        break;
      case 6:
        line.style =
          "position: absolute; z-index: 2; height: 63vh; width: 4px; background: linear-gradient(0deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 100% 200%; animation: diagonal 2s; transform: translateX(30vh) translateY(11vh) rotate(135deg);";
        break;
      case 7:
        line.style =
          "position: absolute; z-index: 2; height: 68vh; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(30vh) translateY(8vh) rotate(45deg);";
        break;
    }
  }
}
