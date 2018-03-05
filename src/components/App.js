import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import About from './About';
import CryptoLists from './CryptoLists';
import Header from './Header';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={CryptoLists} />
            <Route exact path="/about" component={About} />
          </div>          
        </BrowserRouter>
    );
  }
}

export default App;
