import React, { Component, Fragment } from "react";
import { Form, Header, Segment, Button } from "semantic-ui-react";
import { connect } from 'react-redux';
import cuid from "cuid";

import { createSpace, updateSpace } from '../features/spaces/spacesActions';

class AdminEditSpaceForm extends Component {
  state = {
    space: {
      header: "",
      description: "",
      meta: "",
      contactDetails: "",
      location: "",
      overview: ""
    }
  };

  componentDidMount = () => {
    if(this.props.match.params.id && this.props.spaces) {
      const matchingFields = this.props.spaces.filter(space => space.id === this.props.match.params.id)[0];
      this.setState({space: matchingFields})
    }
  }

  handleInputChange = event => {
    const newSpace = this.state.space;
    newSpace[event.target.name] = event.target.value;
    this.setState({
      space: newSpace
    });
  };

  handleFormSubmit = () => {
    const newSpace = this.state.space;

    if(this.props.match.params.id) {
      this.setState({ space: newSpace });
      this.props.updateSpace(this.state.space);
      this.props.history.push("/admin/spaces");
      return;
    } 

    newSpace['id'] = cuid();
    this.setState({ space: newSpace })
    this.props.createSpace(this.state.space);

    this.props.history.push('/admin/spaces');
  };

  render() {
    const { space } = this.state;
    return (
      <Fragment>
        <Header as="h1">Add New Space</Header>

        <Segment>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Input
              label="Space Name"
              type="text"
              placeholder="Name of the Space"
              name="header"
              value={space.header}
              onChange={this.handleInputChange}
            />
            <Form.Input
              label="Short Description"
              type="text"
              name="description"
              placeholder="Description of the Space"
              value={space.description}
              onChange={this.handleInputChange}
            />
            <Form.Input
              label="Space Timings"
              type="text"
              name="meta"
              placeholder="Timings"
              value={space.meta}
              onChange={this.handleInputChange}
            />
            <Form.Input
              label="Contact Details"
              type="text"
              name="contactDetails"
              placeholder="Enter the Phone Number"
              value={space.contactDetails}
              onChange={this.handleInputChange}
            />
            <Form.Input
              label="Location"
              type="text"
              name="location"
              placeholder="Enter the area name"
              value={space.location}
              onChange={this.handleInputChange}
            />
            <Form.TextArea
              label="Overview"
              name="overview"
              placeholder="Write the Overview"
              value={space.overview}
              onChange={this.handleInputChange}
            />
            <Button type="submit" color="blue">
              Add Space
            </Button>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces
})

export default connect(mapStateToProps, {createSpace, updateSpace})(AdminEditSpaceForm);
