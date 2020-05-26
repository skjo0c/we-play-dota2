import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './containers/dashboard';
import LeagueDetail from './containers/leaguePage';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/league/:league_id" component={LeagueDetail} />
        </div>
      </div>
    </Router>
  );
}

export default App;
