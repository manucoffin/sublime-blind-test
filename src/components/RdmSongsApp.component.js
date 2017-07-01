import React, { Component } 	from 'react';
import { render } 						from 'react-dom';

import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Connexion from './Connexion.component';
import GameParameters from './GameParameters.component';
import GameInstance from './GameInstance.component';

class RdmSongsApp extends Component {

	constructor() {
		super(...arguments);
	}

	render(){
		return (
      <Router>
        <header>
          <nav>
            <ul>
              <li><Link to='/gameparameters'>Home</Link></li>
              <li><Link to='/connexion'>Roster</Link></li>
              <li><Link to='/gameinstance'>Schedule</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={RdmSongsApp} />
            <Route path="/connexion" component={Connexion} />
            <Route path="/gameparameters" component={GameParameters} />
            <Route path="/gameinstance" component={GameInstance} />
          </Switch>
        </main>
      </Router>
		);
	}
}

export default RdmSongsApp;