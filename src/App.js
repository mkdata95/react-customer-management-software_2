import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customer = [
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
];

class App extends Component {
  render() {
    return (
      <div>
        {customer.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
