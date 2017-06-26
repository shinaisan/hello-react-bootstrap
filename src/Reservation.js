import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Is going:
          </Col>
          <Col sm={1}>
            <FormControl type="checkbox"
              name="isGoing"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </Col>
          <Col componentClass={ControlLabel} sm={3}>
            Number of guests:
          </Col>
          <Col sm={3}>
            <FormControl type="number"
              name="numberOfGuests"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <FormControl name="preview" type="text" size="40" value={JSON.stringify(this.state)} />
        </FormGroup>
      </Form>
    );
  }
}

export default Reservation;

