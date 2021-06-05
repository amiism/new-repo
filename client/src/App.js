import React from 'react';
import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage/Mainpage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/main" component={MainPage} />
          {/*<Route path="/login" component={Login} />*/}
        </Switch>
      </Router>
    </>
    
    );
}

export default App;
