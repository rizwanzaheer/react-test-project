import React, { Component } from "react";
import "../App.css";
import { Grid } from "semantic-ui-react";

class HomeContainer extends Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        {this.props.children}
      </Grid>
    );
  }
}

export default HomeContainer;
