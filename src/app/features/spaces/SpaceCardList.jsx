import React from 'react';
import { Card } from "semantic-ui-react";
import SpaceCard from "./SpaceCard";
import SpaceCategoryCard from './SpaceCategoryCard';

const SpaceCardList = (props) => {
  const spaces = props.items && props.items.map(item => {
    return <SpaceCard key={item.id} item={item} />;
  });

  const space_cat = props.items && props.items.map(item => {
    return <SpaceCategoryCard key={item.id} item={item} />;
  });

  return (
    <Card.Group itemsPerRow={props.itemsPerRow} style={{ padding: "40px 0" }}>
      { props && props.type === 'space' ? spaces : space_cat }
    </Card.Group>
  )
}

export default SpaceCardList
