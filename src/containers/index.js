import React, { Component } from "react";
import "../App.css";
import { Grid } from "semantic-ui-react";

class HomeContainer extends Component {
  render() {
    return (
      <Grid textAlign="center" style={styles} verticalAlign="middle">
        {this.props.children}
      </Grid>
    );
  }
}

const styles = { height: "100vh" };

export default HomeContainer;
