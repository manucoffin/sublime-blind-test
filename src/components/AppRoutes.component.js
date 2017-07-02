import Connexion from './Connexion.component';
import GameParameters from './GameParameters.component';
import GameInstance from './GameInstance.component';
import RdmSongsApp from './RdmSongsApp.component';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



class AppRoutes extends Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to='/'>RdmSongsApp</Link></li>
            <li><Link to='/gameparameters'>Home</Link></li>
            <li><Link to='/connexion'>vknvn</Link></li>
            <li><Link to='/gameinstance'>zzjin</Link></li>
          </ul>
        </nav>
        <div>
          <Route path="/" component={RdmSongsApp} />
          <Route path="/gameparameters" component={Connexion} />
          <Route path="/connexion" component={GameParameters} />
          <Route path="/gameinstance" component={GameInstance} />
        </div>
      </div>
    )
  }
}

export default AppRoutes;