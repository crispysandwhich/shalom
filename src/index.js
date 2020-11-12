import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './components/App';
import './index.css'

import About from './components/about'
import Contact from './components/contact'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

