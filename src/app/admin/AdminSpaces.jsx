import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { deleteSpace } from '../features/spaces/spacesActions';
import AdminSpacesTable from './AdminSpacesTable';


class AdminSpaces extends Component {
  
  handleSpaceDelete = (deleteId) => {
    this.props.deleteSpace(deleteId);
  }

  render () {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <h1>Spaces</h1>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button basic color='blue' as={Link} to={'/admin/spaces/new'}>Add New Space</Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <AdminSpacesTable spaces={this.props.spaces} deleteSpace={this.handleSpaceDelete}/>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces
})

export default connect(mapStateToProps, { deleteSpace })(AdminSpaces);


