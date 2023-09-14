const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("I'm Here and Working Fine");
});

app.listen(PORT, () => {
  console.log(`Server is running on  ${PORT} `);
});
