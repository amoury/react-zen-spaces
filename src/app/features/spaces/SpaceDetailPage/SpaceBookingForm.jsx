import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class SpaceBookingForm extends Component {
  render() {
    return (
      <Form>
        <Form.Input
          fluid
          label="First Name"
          name="first-name"
          placeholder="Enter your first name"
        />
        <Form.Input
          fluid
          label="Last Name"
          name="last-name"
          placeholder="Enter your last name"
        />
        <Form.Input
          fluid
          label="Contact Number"
          name="contact-number"
          placeholder="Enter your mobile number"
        />
        <Form.Input
          fluid
          label="Email Address"
          name="email-address"
          type='email'
          placeholder="Enter a valid email address"
        />
        <Button fluid type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default SpaceBookingForm;
