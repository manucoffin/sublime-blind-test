import React from 'react';
import ReactDOM from 'react-dom';
import RdmSongsApp from './src/components/RdmSongsApp.component';
import { BrowserRouter } from 'react-router-dom';
import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Connexion from './src/components/Connexion.component';
import GameParameters from './src/components/GameParameters.component';
import GameInstance from './src/components/GameInstance.component';
import AppRoutes from './src/components/AppRoutes.component';

ReactDOM.render((
<BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
  ), document.getElementById('root'));