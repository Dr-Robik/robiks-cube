import {
  TwistyPlayer
} from "https://cdn.cubing.net/js/cubing/twisty";

import {
  randomScrambleForEvent
} from "https://cdn.cubing.net/js/cubing/scramble";

const player = new TwistyPlayer({
  puzzle: "3x3x3",
  hintFacelets: "floating",
  background: "none",
  controlPanel: "none"
});

document
  .getElementById("cube-container")
  .appendChild(player);

const scrambleButton =
  document.getElementById("scramble-btn");

const resetButton =
  document.getElementById("reset-btn");

const scrambleText =
  document.getElementById("scramble-text");

scrambleButton.addEventListener("click", async () => {

  const scramble =
    await randomScrambleForEvent("333");

  player.alg = scramble.toString();

  scrambleText.textContent =
    scramble.toString();
});

resetButton.addEventListener("click", () => {

  player.alg = "";

  scrambleText.textContent =
    "";
});