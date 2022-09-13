const express = require("express");
const app = express();
var perma = 0;

app.get("/", (req, res) => {
  res.json({ msg: "Public" });
});

app.get("/turnLeft", (req, res) => {
  if (perma < 1) {
  } else {
    perma--;
  }
});

app.get("/turnRight", (req, res) => {
  if (perma > 1) {
  } else {
    perma++;
  }
});

app.listen(8080);

function Loop() {
    console.log(perma);
  setTimeout(Loop, 1000 / 60);
}

Loop();
