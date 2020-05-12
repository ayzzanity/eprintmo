import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import NotFound from "./pages/404"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Request from "./pages/request"
import Status from "./pages/status"
import AdminRequests from './pages/admin/request';
import AdminStatus from './pages/admin/status';
import AdminRates from './pages/admin/rates';
import AdminQueue from './pages/admin/queue';
import AdminUsers from './pages/admin/users';

class App extends Component{
  render(){
    return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/404" component={NotFound} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/request" component={Request} />
      <Route path="/status" component={Status} />
      <Route path="/admin/request" component={AdminRequests} />
      <Route path="/admin/status" component={AdminStatus} />
      <Route path="/admin/rates" component={AdminRates} />
      <Route path="/admin/queue" component={AdminQueue} />
      <Route path="/admin/users" component={AdminUsers} />
      <Redirect to="/404" />
      </Switch>
    </Router>
    )
  }
}

export default App;
