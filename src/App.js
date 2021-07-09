import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { setPizzas } from "./redux/actions/pizzas";
import { connect } from "react-redux";


// function App() {
//   useEffect(() => {
//     axios("https://60e705ad15387c00173e4a0d.mockapi.io/pizza").then(
//       (response) => setPizzas(response.data[0].pizzas)
//     );
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" exact render={() => <Home items={pizzas} />} />
//         <Route path="/Cart" exact component={Cart} />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios("https://60e705ad15387c00173e4a0d.mockapi.io/pizza").then(
      ({ response }) => {
        // store.dispatch(setPizzas(response.data[0].pizzas));
      }
    );
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact render={() => <Home items={[]} />} />
          <Route path="/Cart" exact component={Cart} />
        </div>
      </div>
    );
  }
}

export default connect()(App);
