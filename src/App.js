import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/">home</NavLink>
          </nav>
        </header>
        <main>
          <Route path="/" component={HomePage}></Route>
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };
}

export default withRouter(App);
