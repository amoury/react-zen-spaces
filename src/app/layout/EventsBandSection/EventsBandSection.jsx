import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import styles from './EventsBandSection.module.css';
import SubscriptionForm from '../SubscriptionForm';

const EventsBandSection = () => {
  return (
    <Segment raised id={styles.explore_events_band}>
      <div className={styles.subscription_form}>
        <Header as="h2">Explore the Events happening at these spaces</Header>
        <SubscriptionForm />
      </div>
    </Segment>
  )
}

export default EventsBandSection
