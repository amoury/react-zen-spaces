import React from 'react'
import { Container, Divider, Icon } from "semantic-ui-react";

const SectionContainer = (props) => {
  return (
    <Container style={{ padding: "40px 0" }}>
      <Divider as="h2" horizontal>
        <Icon name={props.icon} />
        {`   ${props.heading}`}
      </Divider>

      {props.children}
    </Container>
  );
}

export default SectionContainer
