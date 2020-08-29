import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Footer from './home/Footer';
import Header from './header/Header';
import About from './about/About';
// import logo from "./content/logo192.png";
// rafce

function App() {
  return (
    <div>
      {/* <img src={logo} class="img-fluid" alt="test" /> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs">
            <Home />
          </Route>
          <Route path="/services">
            <Home />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
