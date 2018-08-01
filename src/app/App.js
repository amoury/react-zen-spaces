import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './layout/Navigation/Navigation';
import Main from './layout/Main/Main';
import EventList from './features/events/EventList';
import SpaceDetailPage from './features/spaces/SpaceDetailPage/SpaceDetailPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        
        <Route exact path='/' component={Main}/>
        <Route path='/events' component={EventList}/>
        <Route path ='/spaces/:id' component={SpaceDetailPage} />

      </Fragment>
    );
  }
}

export default App;
