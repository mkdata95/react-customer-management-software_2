const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello express" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
