import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {

  const [activePage, setActivePage] = useState("home")

  const containerStyle = {
    marginTop: '20px',
  };

  const navbarStyle = {
    backgroundColor: '#007bff',
    color: '#fffg',
    padding: '10px',
    textColor: '#fffg'
  };

  const handleNavClick = (page) => {
    setActivePage(page)
  }
  return (
    <div style={navbarStyle} className="container mt-3">
    <NavBar activePage={activePage} handleNavClick={handleNavClick}/>
    <div style={containerStyle}>
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        <Route path="/" component={Home} />
      </Switch>
      </div>
      </div>
  );
}

export default App;