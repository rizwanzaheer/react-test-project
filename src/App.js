import React, { Component } from "react";
import "./App.css";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import HomeContainer from "./containers/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center" />
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
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
          </Grid.Column>
        </HomeContainer>
      </div>
    );
  }
}

export default App;
