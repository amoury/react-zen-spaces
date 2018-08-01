import React from 'react';
import { Segment, Header, Image, Divider } from 'semantic-ui-react';

import image from '../../../../assets/images/about_banner.png'
import SpaceBookingForm from './SpaceBookingForm';

const SpaceDetailRight = () => {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Header as='h1'>Google Maps</Header>
        <Divider />
        <Image fluid src={image} />
      </Segment>
      <Segment attached>
        <Header as='h2'>Book a Tour</Header>
        <Divider />
        <SpaceBookingForm />
      </Segment>
    </Segment.Group>
  )
}

export default SpaceDetailRight
