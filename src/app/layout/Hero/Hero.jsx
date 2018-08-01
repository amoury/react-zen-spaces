import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import image from '../../../assets/images/about_banner.png';
import styles from './Hero.module.css';


const Hero = () => {
  return (
    <Container className={styles.intro_section} style={{backgroundImage: `url(${image})`}}>
      <Header as="h1">Explore spaces to work!</Header>
    </Container>
  )
}

export default Hero
