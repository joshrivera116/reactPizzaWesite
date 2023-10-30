import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas= [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. all
            from our state of the art stone oven. all organic!
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu :)</p>
      )}

      {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/> */}
    </main>
  );
}
function Pizza({ pizzaobj }) {
  console.log(pizzaobj);
  // if (pizzaobj.soldOut) return null;


  return (
    <li className={`pizza ${pizzaobj.soldOut ? 'sold-out': ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{ pizzaobj.soldOut ? 'SOLD OUT' : pizzaobj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const openHour = 10;
  const closeHour = 20;
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const hour = new Date().getHours();
  useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, []);
  });
  console.log(hour);
  const isOpen = hour >= openHour && hour <= closeHour;

  if (!isOpen)
    return (
      <div className="footer">
        {" "}
        <p>
          Sorry, We are currently closed, please come at{" "}
          {openHour > 12 ? `${openHour - 12}:00PM` : `${openHour}:00AM`}
        </p>{" "}
        <p className="time">{time}</p>
      </div>
    );
  return (
    <footer className="footer">
      <div className="order">
        <p>
          We are currently open until{" "}
          {closeHour > 12 ? `${closeHour - 12}:00PM` : `${closeHour}:00AM`}
        </p>
        <p className="time">{time}</p>
        <button className="btn">Order Now!</button>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
