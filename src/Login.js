import React, { Component } from "react";
import { Grid, Form, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  handleClick = () => {
    this.props.history.push(`${process.env.PUBLIC_URL}/step-one`);
  };

  renderContent() {
    return (
      <div className="full-height">
        <div className="vertical-align">
          <h1 className="center-align">Please login</h1>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" />
            </Form.Field>
            <Button primary fluid type="submit" onClick={this.handleClick}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column width={4} only="computer">
          {this.renderContent()}
        </Grid.Column>
        <Grid.Column width={6} only="tablet">
          {this.renderContent()}
        </Grid.Column>
        <Grid.Column width={12} only="mobile">
          {this.renderContent()}
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(Login);
