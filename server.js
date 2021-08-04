const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "박종훈",
      birthday: "680826",
      gender: "남자",
      job: "자영업",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "조상철",
      birthday: "680826",
      gender: "남자",
      job: "자영업",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "홍길동",
      birthday: "680826",
      gender: "남자",
      job: "자영업",
    },
  ]);
});

app.listen(port, () => console.log(`서버의 동작 포트는 ${port}`));
