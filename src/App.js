import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"; 
import './index.css';
// import TopNav from "./components/TopNav";
import LogIn from "./components/Login";
import Signup from "./components/Signup";

// ADD THIS TO YOUR PORTFOLIO
// ADD THIS TO YOUR PORTFOLIO
// ADD THIS TO YOUR PORTFOLIO
// ADD THIS TO YOUR PORTFOLIO
// ADD THIS TO YOUR PORTFOLIO
// ADD THIS TO YOUR PORTFOL



function App() {
  return (
    <BrowserRouter>
    <div className="app-main">
        {/* <nav className="navbar">
          <h1>Web.com</h1>
            <div className="btn-container">
              <Link to="/login">
                <button className="main-btn">Log In</button>
              </Link>
              <Link to="/signup">
                  <button className="main-btn">Sign Up</button>
              </Link>
            </div>
        </nav> */}

{/* -------------------------------------------------------------------------- */}
            <Switch>
              <Route path="/login" >
                <LogIn/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
            </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;

