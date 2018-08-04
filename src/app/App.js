import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SpaceDetailPage from "./features/spaces/SpaceDetailPage/SpaceDetailPage";
import EventsPage from "./pages/EventsPage";
import AdminPage from "./pages/AdminPage";
import ModalManager from "./layout/Modals/ModalManager";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/spaces/:id" component={SpaceDetailPage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
