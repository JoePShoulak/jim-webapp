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
import Fibonacci from './pages/Fibonacci/Fibonacci';
import About from "./pages/About/About";
import Footer from "./components/Footer";

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
                          <About />
                      </Route>
                      <Route path="/fibonacci">
                          <Fibonacci />
                      </Route>
                      <Route path="/pisano">
                          <Pisano />
                      </Route>
                    </Switch>
                </Router>
            </header>
            <Footer />
        </div>
  );
}

export default App;
