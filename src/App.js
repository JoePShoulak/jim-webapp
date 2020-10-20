import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import HomePage      from "./pages/HomePage";
import AboutPage     from "./pages/AboutPage";
import FibonacciPage from './pages/FibonacciPage';
import PisanoPage    from './pages/PisanoPage';
import PokemonPage   from "./pages/PokemonPage";
import WeatherPage   from "./pages/WeatherPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Grid container justify={'center'}>
                <Grid item xs={6}>
                    <Switch>
                        <Route exact path={'/'}>          <HomePage />      </Route>
                        <Route exact path={'/about'}>     <AboutPage />     </Route>
                        <Route exact path={'/fibonacci'}> <FibonacciPage /> </Route>
                        <Route exact path={'/pisano'}>    <PisanoPage />    </Route>
                        <Route exact path={'/pokemon'}>   <PokemonPage />   </Route>
                        <Route exact path={'/weather'}>   <WeatherPage />   </Route>

                        <Redirect to={"/"} />
                    </Switch>

                </Grid>
            </Grid>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
