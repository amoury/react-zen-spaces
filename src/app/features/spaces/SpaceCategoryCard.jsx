import React from 'react';
import { Card, Image, Header } from 'semantic-ui-react';
import image from '../../../assets/images/about_banner.png';

const styles = {
  card: {
    position: "relative"
  },
  heading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#000000",
    textTransform: "uppercase",
    fontSize: "1.2em",
    letterSpacing: "0.08em",
    marginTop: "0"
  }
}

const SpaceCategoryCard = ({item}) => {
  return (
    <Card fluid style={{...styles.card}}>
      <Image src={image} href="http://www.google.com" fluid/>
      <Header as='h3' style={{...styles.heading}}>{ item.header }</Header>
    </Card>
  )
}

export default SpaceCategoryCard
