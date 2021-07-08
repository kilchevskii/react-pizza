import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios("https://60e705ad15387c00173e4a0d.mockapi.io/pizza").then(
      (response) => setPizzas(response.data[0].pizzas)
    );
  }, []);

  // console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact render={() => <Home items={pizzas} />} />
        <Route path="/Cart" exact component={Cart} />
      </div>
    </div>
  );
}

export default App;
