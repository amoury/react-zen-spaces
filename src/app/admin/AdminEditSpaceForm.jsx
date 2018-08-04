import React, { Component, Fragment } from "react";
import { Form, Header, Segment, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { combineValidators, isRequired } from 'revalidate';
import cuid from "cuid";

import { createSpace, updateSpace } from "../features/spaces/spacesActions";
import TextInput from "../form/TextInput";
import TextArea from "../form/TextArea";

const validate = combineValidators({
  header: isRequired({message: 'The space name is required'}),
  description: isRequired('description'),
  meta: isRequired('meta'),
  contactDetails: isRequired('Contact Details'),
  location: isRequired('location'),
  overview: isRequired('overview')
})

class AdminEditSpaceForm extends Component {
  
  handleFormSubmit = (values) => { 
    if (this.props.initialValues.id) {
      this.props.updateSpace(values);
      this.props.history.push("/admin/spaces");
      return;
    }
    const newSpace = {...values, id: cuid() }
    this.props.createSpace(newSpace);
    this.props.history.push("/admin/spaces");
  };

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Fragment>
        <Header as="h1">Add New Space</Header>

        <Segment>
          <Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field
              name="header"
              type="text"
              component={TextInput}
              placeholder="Enter the name of the space"
              label="Space Name"
            />
            <Field
              name="description"
              type="text"
              component={TextInput}
              placeholder="Enter the description of the space"
              label="Short Description"
            />
            <Field
              name="meta"
              type="text"
              component={TextInput}
              placeholder="Enter the timings of the space"
              label="Operating Hours"
            />
            <Field
              name="contactDetails"
              type="text"
              component={TextInput}
              placeholder="Enter the phone number"
              label="Contact Number"
            />
            <Field
              name="location"
              type="text"
              component={TextInput}
              placeholder="Enter the Location"
              label="Location"
            />
            <Field
              name="overview"
              type="textarea"
              component={TextArea}
              placeholder="Enter the Overview"
              label="Overview"
            />

            <Button disabled={invalid || submitting || pristine } type="submit" color="blue">
              Submit
            </Button>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const spaceId = ownProps.match.params.id;
  let space = {};
  if (spaceId && state.spaces.length > 0) {
    space = state.spaces.filter( space => space.id === spaceId)[0];
  }
  return { initialValues: space };
};

export default connect(
  mapStateToProps,
  { createSpace, updateSpace }
)(reduxForm({ form: "spaceForm", enableReinitialize: true, validate })(AdminEditSpaceForm));
