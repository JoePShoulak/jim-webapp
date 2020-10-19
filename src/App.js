import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

import Home      from "./pages/Home";
import About     from "./pages/About";
import Fibonacci from './pages/Fibonacci';
import Pisano    from './pages/Pisano';
import Eevee     from "./pages/Eevee";

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
                <Route path="/eevee">     <Eevee />     </Route>

                <Redirect to={"/"} />
            </Switch>
            <Footer />
        </div>
  );
}

export default App;
