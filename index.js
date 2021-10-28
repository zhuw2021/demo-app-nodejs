const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! - Nodejs");
});

app.listen(port, () => {
  console.log(`Example app listnening at http://localhost:${port}`);
});
