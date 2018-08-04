import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form, Segment, Button, Label } from "semantic-ui-react";
import TextInput from "../../../form/TextInput";
import { registerUser } from "../authActions";

const RegisterForm = ({ handleSubmit, registerUser, error }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(registerUser)}>
      <Segment>
        <Field
          name="displayName"
          type="text"
          component={TextInput}
          placeholder="Known As"
        />
        <Field
          name="email"
          type="text"
          component={TextInput}
          placeholder="email"
        />
        <Field
          name="password"
          type="password"
          component={TextInput}
          placeholder="Password"
        />
        {error && <Label color="red">{error}</Label>}
        <Button fluid size="large" color="teal">
          Register
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  { registerUser }
)(reduxForm({ form: "registerForm" })(RegisterForm));
