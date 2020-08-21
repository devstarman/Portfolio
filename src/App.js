import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Projects from './screens/Projects/Projects';
import NoMatch from './screens/NoMatch/NoMatch';


const LINKS = [
  {path: "/", label: "Home"},
  {path: "/about", label: "About"},
  {path: "/projects", label: "Projects"}
];

function App() {
  return (
    <Router>
        <Header links={LINKS} />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;
