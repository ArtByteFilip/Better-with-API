const axios = require("axios");
let readline = require("readline");

readline.emitKeypressEvents(process.stdin);

process.stdin.on("keypress", (ch, key) => {
  console.log('got "keypress"', ch, key);

  if (key && key.name == "left") {
    axios
    .get("http://localhost:8080/turnLeft")
    .then((res) => {
    })
    .catch((error) => {
      console.error(error);
    });
  }

  if (key && key.name == "right") {
    axios
    .get("http://localhost:8080/turnRight")
    .then((res) => {
    })
    .catch((error) => {
      console.error(error);
    });
  }

  if (key && key.ctrl && key.name == "c") {
    console.log("ctrl+c was pressed");
    exitasd; // Crash program
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();