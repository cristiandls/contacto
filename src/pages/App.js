import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Loading from './Loading';

const AsyncContact = importedComponent(() => import('./QuieroColaborar'), { LoadingComponent: Loading });
const AsyncNoMatch = importedComponent(() => import('./NoMatch'), { LoadingComponent: Loading });

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AsyncContact} />
        <Route component={AsyncNoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
