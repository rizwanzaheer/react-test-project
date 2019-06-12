import React, { Component } from "react";
import "../App.css";
import { Grid } from "semantic-ui-react";
import Home from "./home";

class RootContainer extends Component {
  render() {
    return (
      <Grid textAlign="center" style={styles} verticalAlign="middle">
        <Home />
      </Grid>
    );
  }
}

const styles = { height: "85vh" };

export default RootContainer;
