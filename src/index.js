import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {
  Navbar
} from 'react-bootstrap';

ReactDOM.render(
  <Navbar fixedTop={true} inverse={true}>
    <Navbar.Header>
      <Navbar.Brand>Hello React-Bootstrap</Navbar.Brand>
    </Navbar.Header>
  </Navbar>,
  document.getElementById('appbar')
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

