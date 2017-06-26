import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import ExpressionsInJsx from './ExpressionsInJsx';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './Conditional';
import NumberList from './NumberList';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import WelcomeDialog from './Composition';
import FilterableProductTable from './FilterableProductTable';
import {
  Dropdown,
  MenuItem
} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.onAppSelect = this.onAppSelect.bind(this);
    this.state = {appName: 'hello'};
    const numbers = [1, 2, 3, 4, 5];
    const PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    this.apps = {
      welcome: {
        caption: "Welcome to React",
        element: (
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        )
      },
      hello: {
        caption: "Hello World",
        element: (
          <HelloWorld />
        )
      },
      jsx: {
        caption: "Introducing JSX",
        element: (
          <ExpressionsInJsx />
        )
      },
      clock: {
        caption: "State and Lifecycle",
        element: (
          <Clock />
        )
      },
      toggle: {
        caption: "Handling Events",
        element: (
          <Toggle />
        )
      },
      login: {
        caption: "Conditional Rendering",
        element: (
          <LoginControl />
        )
      },
      lists: {
        caption: "Lists and Keys",
        element: (
          <NumberList numbers={numbers} />
        )
      },
      forms: {
        caption: "Forms",
        element: (
          <div>
            <NameForm />
            <EssayForm />
            <FlavorForm />
            <Reservation />
          </div>
        )
      },
      calc: {
        caption: "Lifting State Up",
        element: (
          <Calculator />
        )
      },
      composition: {
        caption: "Composition vs Inheritance",
        element: (
          <WelcomeDialog />
        )
      },
      products: {
        caption: "Thinking in React",
        element: (
          <FilterableProductTable products={PRODUCTS} />
        )
      }
    };
  }

  onAppSelect(eventKey) {
    this.setState({appName: eventKey});
  }

  render() {
    let selection = Object.keys(this.apps).map((key) => (
      <MenuItem eventKey={key}
        active={this.state.appName === key}>
        {this.apps[key].caption}
      </MenuItem>
    ));
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dropdown>
          <Dropdown.Toggle>
            Select App:
          </Dropdown.Toggle>
          <Dropdown.Menu onSelect={this.onAppSelect}>
            {selection}
          </Dropdown.Menu>
        </Dropdown>
        <div>{this.apps[this.state.appName].element}</div>
      </div>
    );
  }
}

export default App;
