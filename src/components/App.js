import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "../components/auth/Login"
import Signup from "../components/auth/Signup"
import { ProtectedRoute } from "./auth/protected.route"
import Dashboard from "./dashboard/Dashboard"
import Work from "./dashboard/Work"
import Webcam from "./dashboard/Webcam"
import Analytics from './dashboard/Analytics';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/webcam' component={Webcam}/>
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          <Route
            path='/todo/:todoTitle'
            render={props => (
              <Work {...props} />
            )}
          />
          <Route exact path='/analytics' component={Analytics}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
