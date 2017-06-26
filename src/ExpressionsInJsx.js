import React, { Component } from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Foo',
  lastName: 'Bar'
};

const element = (
  <h1>
  Hello, {formatName(user)}!
  </h1>
);

class ExpressionsInJsx extends Component {
  render() {
    return element;
  }
}

export default ExpressionsInJsx;

