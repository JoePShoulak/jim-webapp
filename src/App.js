import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

import Home      from "./pages/Home";
import About     from "./pages/About";
import Fibonacci from './pages/Fibonacci';
import Pisano    from './pages/Pisano';
import Pokemon   from "./pages/Pokemon";
import Weather   from "./pages/Weather";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path={'/'}>          <Home />      </Route>
                <Route exact path={'/about'}>     <About />     </Route>
                <Route exact path={'/fibonacci'}> <Fibonacci /> </Route>
                <Route exact path={'/pisano'}>    <Pisano />    </Route>
                <Route exact path={'/pokemon'}>   <Pokemon />   </Route>
                <Route exact path={'/weather'}>   <Weather />   </Route>

                <Redirect to={"/"} />
            </Switch>
            <Footer />
        </div>
  );
}

export default App;
