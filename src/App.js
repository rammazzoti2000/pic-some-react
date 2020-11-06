import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
