import { BrowserRouter, Route, Switch, Link } from "react-router-dom"; 
import Login from "./Login";
import Signup from "./Signup";

const TopNav = () => {

  return (
    <>
     <BrowserRouter>
      <nav className="top-nav">
        <h3>Web.com</h3>
        <div className="btn-container">
          <button className="main-btn">
            <Link to="/login">Log In</Link>
          </button>
          <button className="main-btn">
            <Link to="/signup">Sign up</Link>
          </button>
            <Switch>
              <Route path="/login" >
                <Login/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
            </Switch>
        </div>
        </nav>
          </BrowserRouter>
    </>
  )
}

export default TopNav; 