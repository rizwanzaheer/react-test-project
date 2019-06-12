import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class FormComponent extends Component {
  render() {
    return (
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="search"
            iconPosition="left"
            placeholder="Postcode e.g EH48 2GG"
          />
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="House number, street, sublocality"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="City"
          />
          <Button color="teal" fluid size="large">
            Search
          </Button>
        </Segment>
      </Form>
    );
  }
}

export default FormComponent;
