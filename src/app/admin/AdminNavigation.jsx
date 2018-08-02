import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Segment } from "semantic-ui-react";

class AdminNavigation extends Component {
  render() {
    return (
      <Segment.Group
        style={{ height: "100vh", display: "flex", justifyContent: "center" }}
      >
        <Segment>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </Segment>
        <Segment>
          <NavLink to="/admin/spaces">Spaces</NavLink>
        </Segment>
        <Segment>
          <NavLink to="/admin/events">Events</NavLink>
        </Segment>
        <Segment>
          <NavLink to="/">Back Home</NavLink>
        </Segment>
      </Segment.Group>
    );
  }
}

export default AdminNavigation;
