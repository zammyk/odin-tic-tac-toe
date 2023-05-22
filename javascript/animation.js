//Line-crossing animation
export default function lineAnimation(i, direction, screenWidth) {
  if (screenWidth.matches) {
    if (direction === "horizontal") {
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
      }
    } else if (direction === "vertical") {
      switch (i) {
        case 0:
          line.style =
            "position: absolute; z-index: 2; height: 13rem; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(2.4rem) translateY(7rem)";
          break;
        case 1:
          line.style =
            "position: absolute; z-index: 2; height: 13rem; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(7.4rem) translateY(7rem)";
          break;
        case 2:
          line.style =
            "position: absolute; z-index: 2; height: 13rem; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(12.4rem) translateY(7rem)";
          break;
      }
    } else {
      switch (i) {
        case 0:
          line.style =
            "position: absolute; z-index: 2; height: 18.2rem; width: 4px; background: linear-gradient(0deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 100% 200%; animation: diagonal 2s; transform: translateX(7.5rem) translateY(4.3rem) rotate(135deg);";
          break;
        case 2:
          line.style =
            "position: absolute; z-index: 2; height: 18.2rem; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(7.5rem) translateY(4.3rem) rotate(45deg);";
          break;
      }
    }
  } else {
    if (direction === "horizontal") {
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
      }
    } else if (direction === "vertical") {
      switch (i) {
        case 0:
          line.style =
            "position: absolute; z-index: 2; height: 48vh; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(10vh) translateY(18vh)";
          break;
        case 1:
          line.style =
            "position: absolute; z-index: 2; height: 48vh; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(30vh) translateY(18vh)";
          break;
        case 2:
          line.style =
            "position: absolute; z-index: 2; height: 48vh; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(50vh) translateY(18vh)";
          break;
      }
    } else {
      switch (i) {
        case 0:
          line.style =
            "position: absolute; z-index: 2; height: 63vh; width: 4px; background: linear-gradient(0deg, black 0%, black 50%, transparent 51%, transparent 100%); background-size: 100% 200%; animation: diagonal 2s; transform: translateX(30vh) translateY(11vh) rotate(135deg);";
          break;
        case 2:
          line.style =
            "position: absolute; z-index: 2; height: 68vh; width: 4px; background: linear-gradient(0deg, transparent 0%, transparent 50%, black 51%, black 100%); background-size: 100% 200%; animation: vertical 2s; transform: translateX(30vh) translateY(8vh) rotate(45deg);";
          break;
      }
    }
  }
}
