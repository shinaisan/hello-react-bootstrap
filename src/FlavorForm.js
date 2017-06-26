import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var values = [];
    var opts = event.target.selectedOptions;
    for (var i = 0; i < opts.length; i++) {
      values.push(opts[i].value);
    }
    this.setState({value: values});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value.join(','));
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="flavorSelect">
          <ControlLabel>Pick your favorite La Croix flavor:</ControlLabel>
          <FormControl componentClass="select" multiple onChange={this.handleChange} >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </FormControl>
        </FormGroup>
        <Button type="submit" primary={true} >Submit</Button>
      </Form>
    );
  }
}

export default FlavorForm;

