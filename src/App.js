import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"; 
import './index.css';
// import TopNav from "./components/TopNav";
import LogIn from "./components/Login";
import Signup from "./components/Signup";



function App() {
  return (
    <BrowserRouter>
    <div className="app-main">
        <nav className="navbar">
        <h1>Web.com</h1>
        <div className="btn-container">
          <button className="main-btn">
            <Link to="/login">Log In</Link>
          </button>
          <button className="main-btn">
            <Link to="/signup">Sign up</Link>
          </button>
          </div>
        </nav>

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

