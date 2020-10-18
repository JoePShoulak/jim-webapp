import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Pisano from './pages/Pisano/Pisano';

function App() {

    return (
        <div className="App">
            <header className="App-header">
              <Router>
                  <Navbar/>
                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/about">
                          <Pisano />
                      </Route>
                  </Switch>
              </Router>
            </header>
        </div>
  );
}

export default App;
