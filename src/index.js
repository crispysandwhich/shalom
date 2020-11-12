import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './pages/App';
import './index.css'
import { ThemeProvider } from 'styled-components'
import theme from './components/theme/theme'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>

  ,
  document.getElementById('root')
);

