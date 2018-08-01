import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import SpaceDetailHeader from "./SpaceDetailHeader";
import SpaceDetailInfo from "./SpaceDetailInfo";
import SpaceDetailRight from "./SpaceDetailRight";

const SpaceDetailPage = props => {
  const currentSpace = props.spaces.filter(
    space => space.id === props.match.params.id
  )[0];

  return (
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
  );
};

const mapStateToProps = state => ({
  spaces: state.spaces
});

export default connect(mapStateToProps)(SpaceDetailPage);
