import React from "react";
import { Image, Card, Icon } from 'semantic-ui-react';

import spaceImage from '../../../assets/images/about_banner.png';

const SpaceCard = ({item}) => {
  return (
    <Card href={`/spaces/${item.id}`}>
      <Image src={spaceImage} />
      <Card.Content>
        <Card.Header>{item.header}</Card.Header>
        <Card.Meta>
          <span className="date">{item.meta}</span>
        </Card.Meta>
        <Card.Description>{item.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        22 Friends
     
      </Card.Content>
    </Card>
  );
};

export default SpaceCard;
