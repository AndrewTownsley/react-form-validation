import { BrowserRouter, Route, Switch, Link } from "react-router-dom"; 
import Login from "./Login";
import Signup from "./Signup";


const Home = () => {

  return (
    <div>
      <h1>Welcome to web.com</h1>
      <BrowserRouter>
        <div className="btn-container">
          <button className="main-btn">
            <Link to="/login">Log In</Link>
          </button>
          <button className="main-btn">
            <Link to="/signup">Sign up</Link>
          </button>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/login" >
                <Login/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
            </Switch>
        </div>
          </BrowserRouter>
    </div>
  )
}

export default Home;