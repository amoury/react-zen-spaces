import React, { Component } from 'react';
import EventList from '../features/events/EventList';
import MainLayout from '../layout/MainLayout';

class EventsPage extends Component {
  render () {
    return (
      <MainLayout>
        <EventList/>
      </MainLayout>
    );
  }
}

export default EventsPage;