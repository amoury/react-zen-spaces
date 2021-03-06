import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextInput = ({input, label, width, type, placeholder, meta: { touched, error }}) => {
  return <Form.Field error={touched && !!error} width={width}>
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <Label color="red" pointing="above">
            {error}
          </Label>}
    </Form.Field>;
}

export default TextInput
