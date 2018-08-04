import React from "react";
import { Segment, Header, Divider, Icon } from "semantic-ui-react";
import renderHTML from "react-render-html";

const SpaceDetailInfo = ({ space }) => {
  if(!space) {
    return 'loading...'
  }
  
  return (
    <Segment.Group>
      <Segment>
        <Header as="h2">Overview</Header>
        <Divider />
        { renderHTML(space.overview) }
      </Segment>

      <Segment attached>
        <Header as="h2">Amenities</Header>
        <Divider />

        <Segment.Group>
          <Segment basic>
            <p>
              <Icon name="arrow alternate circle right" />
              Amazing Crowd
            </p>
          </Segment>
          <Segment basic>
            <p>
              <Icon name="arrow alternate circle right" />
              Amazing Crowd
            </p>
          </Segment>
          <Segment basic>
            <p>
              <Icon name="arrow alternate circle right" />
              Amazing Crowd
            </p>
          </Segment>
          <Segment basic>
            <p>
              <Icon name="arrow alternate circle right" />
              Easy access by metro
            </p>
          </Segment>
        </Segment.Group>
      </Segment>
    </Segment.Group>
  );
};

export default SpaceDetailInfo;
