import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Footer from './home/Footer';
import Header from './header/Header';
import About from './about/About';
import Services from './services/Services';
import Blogs from './blogs/Blogs';
import Contact from './contact/Contact';
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
            <Blogs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
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
