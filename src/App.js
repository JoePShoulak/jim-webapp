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

const pages = [
    {'path': '/',          'comp': (<Home      />)},
    {'path': '/about',     'comp': (<About     />)},
    {'path': '/fibonacci', 'comp': (<Fibonacci />)},
    {'path': '/pisano',    'comp': (<Pisano    />)},
    {'path': '/pokemon',   'comp': (<Pokemon   />)},
    {'path': '/weather',   'comp': (<Weather   />)}
]

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                {pages.map((page) => {
                    return (<Route exact key={page.path} path={page.path}> {page.comp} </Route>)
                })}

                <Redirect to={"/"} />
            </Switch>
            <Footer />
        </div>
  );
}

export default App;
