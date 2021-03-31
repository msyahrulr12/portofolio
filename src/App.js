import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, About, Education, Skill, Portofolio, Contact } from './pages';
import './assets/css/style.css';
import { Sidebar } from './layouts';

function App() {
  return (
    <Fragment>
      <div id="wrapper">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/skill">
              <Skill />
            </Route>
            <Route path="/portofolio">
              <Portofolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
