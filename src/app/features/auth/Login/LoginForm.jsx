import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

import TextInput from '../../../form/TextInput';
import { loginUser } from '../authActions';

const LoginForm = ({ loginUser, handleSubmit, error }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(loginUser)}> 
      <Segment>
        <Field name='email' component={TextInput} type='text' placeholder='Email Address' />
        <Field name='password' component={TextInput} type='password' placeholder='Password' />
        { error && <Label color='red'>{error}</Label>}
        <Button fluid size='large' color='teal'>Login</Button>
      </Segment>
    </Form>
  )
}

export default connect(null, {loginUser})(reduxForm({form: 'loginForm' })(LoginForm));
