import React from 'react';
import { Form, Label } from 'semantic-ui-react'

const TextArea = ({ input, label, rows, width, type, placeholder, meta:{touched, error}}) => {
  return <Form.Field error={touched && !!error} width={width}>
      <label>{label}</label>
      <textarea {...input} placeholder={placeholder} rows={rows} />
      {touched && error && <Label color="red">{error} </Label>}
    </Form.Field>;
}

export default TextArea
