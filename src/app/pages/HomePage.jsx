import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Hero from "../layout/Hero/Hero";
import SectionContainer from "../layout/SectionContainer";
import SpaceCardList from "../features/spaces/SpaceCardList";
import EventsBandSection from "../layout/EventsBandSection/EventsBandSection";
import EventList from "../features/events/EventList";
import MainLayout from '../layout/MainLayout';
import LoadingComponent from '../layout/LoadingComponent';

const spaceCategories = [
  {
    id: "002",
    header: "Meeting Rooms"
  },
  {
    id: "005",
    header: "Flexi Desks"
  },
  {
    id: "010",
    header: "Serviced Offices"
  },
  {
    id: "020",
    header: "Board Room"
  }
];

class HomePage extends Component {
  state = {
    spaceCategories: spaceCategories,
  };

  render() {
    const { loading } = this.props;
    if (loading) return <LoadingComponent/>
    return (
      <MainLayout>
        
        <main>
          <Hero />
          <SectionContainer
            heading="co-working spaces near you"
            icon="location arrow"
          >
            <SpaceCardList
              items={this.props.spaces}
              itemsPerRow="4"
              type="space"
            />
          </SectionContainer>

          <SectionContainer heading="Spaces according to your need" icon="coffee">
            <SpaceCardList
              items={this.state.spaceCategories}
              itemsPerRow="2"
              type="space-category"
            />
          </SectionContainer>

          <EventsBandSection />

          <SectionContainer heading="Upcoming events" icon="calendar alternate">
            <EventList />
          </SectionContainer>
        </main>

      </MainLayout>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.firestore.ordered.spaces,
  async: state.async
})

export default connect(mapStateToProps)(firestoreConnect([{ collection: 'spaces' }])(HomePage));
