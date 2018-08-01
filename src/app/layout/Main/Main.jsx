import React, { Component } from 'react'
import Hero from '../Hero/Hero';
import EventsBandSection from '../EventsBandSection/EventsBandSection';
import SpaceCardList from '../../features/spaces/SpaceCardList';

import SectionContainer from '../SectionContainer/SectionContainer';
import EventList from '../../features/events/EventList';

const spaces = [
  {
    id: '001',
    header: "In5",
    description: "Amazing Co-working space near Jumeirah",
    meta: "Timings: 10 am - 1 am"
  },
  {
    id: '002',
    header: "In10",
    description: "Amazing Co-working space near Jumeirah",
    meta: "Timings: 10 am - 1 am"
  },
  {
    id: '003',
    header: "In20",
    description: "Amazing Co-working space near Jumeirah",
    meta: "Timings: 10 am - 1 am"
  },
  {
    id: '004',
    header: "In5",
    description: "Amazing Co-working space near Jumeirah",
    meta: "Timings: 10 am - 1 am"
  }
];

const spaceCategories = [
  {
    id: '002',
    header: 'Meeting Rooms'
  },
  {
    id: '005',
    header: 'Flexi Desks'
  },
  {
    id: '010',
    header: 'Serviced Offices'
  },
  {
    id: '020',
    header: 'Board Room'
  }
]

class Main extends Component {
  state = {
    spaces: spaces,
    spaceCategories: spaceCategories
  };

  render() {
    return <main>
        <Hero />
        <SectionContainer heading="co-working spaces near you" icon="location arrow">
          <SpaceCardList items={this.state.spaces} itemsPerRow="4" type="space" />
        </SectionContainer>

        <SectionContainer heading="Spaces according to your need" icon="coffee">
          <SpaceCardList items={this.state.spaceCategories} itemsPerRow="2" type="space-category" />
        </SectionContainer>

        <EventsBandSection />

        <SectionContainer heading="Upcoming events" icon="calendar alternate">
          <EventList />
        </SectionContainer>

      </main>;
  }
}

export default Main;

