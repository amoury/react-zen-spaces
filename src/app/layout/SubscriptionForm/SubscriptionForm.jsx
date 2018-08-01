import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class SubscriptionForm extends Component {
  render () {
    return (
      <Form size='large'>
        <Form.Group widths="equal">
          <Form.Input fluid label="First Name" placeholder="First Name" />
          <Form.Input fluid label="Email Address" placeholder="Enter your email address" type="email"/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SubscriptionForm;