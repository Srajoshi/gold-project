import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar";
import CarouselPage from "./components/CarouselPage";
import About from "./components/About";
// import Discover from "./components/Discover";
// import Search from "./components/Search";

// import logo from './logo.svg';
// import './App.css';

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/About" component={About} />
      {/* <Route exact path="/Discover" component={Discover} /> */}
      {/* <Route path="/Search" component={Search} /> */}
      {/* <Route exact path="/" component={About} /> */}
      <Route exact path="/" component={CarouselPage} />
    </div>
  </Router>
);


export default App;
