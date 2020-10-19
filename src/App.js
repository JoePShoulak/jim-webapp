import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home      from "./pages/Home/Home";
import About     from "./pages/About/About";
import Fibonacci from './pages/Fibonacci/Fibonacci';
import Pisano    from './pages/Pisano/Pisano';
import Eevee     from "./pages/Eevee/Eevee";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path="/">    <Home />      </Route>
                <Route path="/about">     <About />     </Route>
                <Route path="/fibonacci"> <Fibonacci /> </Route>
                <Route path="/pisano">    <Pisano />    </Route>
                <Route path="/eevee">     <Eevee />    </Route>
            </Switch>
            <Footer />
        </div>
  );
}

export default App;
