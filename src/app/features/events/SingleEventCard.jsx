import React from 'react';
import { Segment, Item, Icon, Button } from 'semantic-ui-react';
import image from '../../../assets/images/about_banner.png';

const SingleEventCard = () => {
  return <Segment.Group style={{ margin: "40px 0" }}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={image} />

            <Item.Content>
              <Item.Header as="a">Futuro Flow Event</Item.Header>
              <Item.Meta>Happening Now</Item.Meta>
              <Item.Description>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima ipsum aperiam, incidunt neque officiis blanditiis ea
                  esse corrupti error explicabo necessitatibus. Consectetur
                  inventore iste officia aperiam deserunt, sed eaque iusto!
                </p>
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name="clock" /> 18-03-2018 at 04:00 |
          <Icon name="map marker alternate" /> Dubai - United Arab Emirates
        </span>
      </Segment>

      <Segment>
        <Button basic color='green'>RSVP</Button>
        <Button basic color='blue'>View Details</Button>
      </Segment>
    </Segment.Group>;
}

export default SingleEventCard
