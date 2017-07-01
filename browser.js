import React from 'react';
import ReactDOM from 'react-dom';
import RdmSongsApp from './src/components/RdmSongsApp.component';


class App extends Component {

  constructor() {
		super(...arguments);
	}
  
  ReactDOM.render(){
		return (
      <div>
        
      </div>
		);
	}
}

ReactDOM.render( (
   <Router>
     <App />
   </Router>
    ) , document.getElementById('root'));