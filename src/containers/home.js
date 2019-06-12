import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import Form from "../components/Form";

class Home extends Component {
  render() {
    return (
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center" />
        <Form />
      </Grid.Column>
    );
  }
}

export default Home;
