import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import Api from "../api/HttpService";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      city: "",
      street: "",
      apiResponseData: []
    };
  }
  componentDidMount() {}
  _onChange(e) {
    console.log("e value is:", e.target.value);
    const { value } = e.target;
    const trimValue = value.trim();
    const validRegex = /^[A-Z][A-Z]?[0-9][0-9]?\s*[0-9][A-Z][A-Z]$/;
    console.log("validate regex is: ", validRegex.test(trimValue));
    if (trimValue && validRegex.test(trimValue)) {
      Api.get(trimValue)
        .then(apiData => {
          console.log("api data is: ", apiData.data);
          if (apiData.data.items.length > 0) {
            this.setState(
              {
                apiResponseData: apiData.data.items,
                city: apiData.data.items[0].city,
                street: apiData.data.items[0].street
              },
              () => {
                console.log("set state data is: ", this.state.apiResponseData);
              }
            );
          }
          //  else {
          //   alert("No record found!");
          // }
        })
        .catch(e => {
          console.log("catch error: ", e);
          throw new Error(e);
        });
    } else {
      this.setState(
        {
          apiResponseData: [],
          city: "",
          street: ""
        },
        () => {
          console.log("set state data is: ", this.state.apiResponseData);
        }
      );
    }
  }
  render() {
    const { city, street } = this.state;
    return (
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="search"
            iconPosition="left"
            placeholder="Postcode e.g EH48 2GG"
            onChange={e => this._onChange(e)}
          />
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            value={street}
            placeholder="House number, street, sublocality"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="City"
            value={city}
          />
        </Segment>
      </Form>
    );
  }
}

export default FormComponent;
