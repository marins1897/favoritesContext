import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import Products from './containers/Products';
import Favorites from './containers/Favorites';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      
      <main>
        <Route path="/" component={Products} exact />
        <Route path="/favorites" component={Favorites} />
      </main>
    </React.Fragment>
  );
};

export default App;
