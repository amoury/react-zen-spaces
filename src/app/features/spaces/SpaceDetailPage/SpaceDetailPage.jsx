import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';


import SpaceDetailHeader from "./SpaceDetailHeader";
import SpaceDetailInfo from "./SpaceDetailInfo";
import SpaceDetailRight from "./SpaceDetailRight";
import MainLayout from '../../../layout/MainLayout';

const SpaceDetailPage = props => {
  const currentSpace = props.spaces && props.spaces.filter(
    space => space.id === props.match.params.id
  )[0];

  return (
    <MainLayout>
      <Container style={{ margin: "50px 0" }}>
        <SpaceDetailHeader space={currentSpace} />
        <Grid stackable style={{ marginTop: "50px" }}>
          <Grid.Column width={10}>
            <SpaceDetailInfo space={currentSpace} />
          </Grid.Column>
  
          <Grid.Column width={6}>
            <SpaceDetailRight />
          </Grid.Column>
        </Grid>
      </Container>
    </MainLayout>
  );
};

const mapStateToProps = state => ({
  spaces: state.firestore.ordered.spaces
});

export default connect(mapStateToProps)(firestoreConnect([{ collection: 'spaces' }])(SpaceDetailPage));
