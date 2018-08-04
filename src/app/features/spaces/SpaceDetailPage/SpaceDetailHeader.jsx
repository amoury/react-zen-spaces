import React from "react";
import { Segment, Header, Image, Rating } from "semantic-ui-react";

import image from "../../../../assets/images/about_banner.png";

const SpaceDetailHeader = ({space}) => {
  if ( !space ) {
    return 'loading...'
  }
  return (
    <Segment.Group>
      <Segment attached="top">
        <Image fluid src={image} />
      </Segment>
      <Segment>
        <Header as="h1">{space.header}</Header>
      </Segment>
      <Segment attached>
        <p>
          <strong>Location</strong> {space.location}{" "}
        </p>
      </Segment>
      <Segment attached>
        <p>
          <strong>Contact Details</strong> {space.contactDetails}
        </p>
      </Segment>
      <Segment attached>
        <strong>Ratings</strong> {" "}
        <Rating icon='star' rating={space.rating} maxRating={5} />
      </Segment>
    </Segment.Group>
  );
};

export default SpaceDetailHeader;
