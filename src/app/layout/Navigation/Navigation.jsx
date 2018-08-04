import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFirebase } from 'react-redux-firebase';

import styles from "./Navigation.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { modalOpen } from "../Modals/modalActions";

class Navigation extends Component {
  onLogin = () => {
    this.props.modalOpen("LoginModal");
  };

  onRegister = () => {
    this.props.modalOpen("RegisterModal");
  };

  onSignOut = () => {
    this.props.firebase.logout();
  }

  render() {
    const { auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <header>
        <nav>
          <div className={styles.left_nav_item}>
            <div className={styles.main_logo_wrapper}>
              <Link to="/">
                <h1 className={styles.main_title}>
                  <strong>Lets</strong>work!
                </h1>
              </Link>
            </div>

            <SearchBar />
          </div>

          <div className={styles.right_nav_item}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <NavLink to="/events">Events</NavLink>
              </li>

              {!authenticated && (
                <li className={styles.nav_link} onClick={this.onLogin}>
                  <a style={{ cursor: "pointer" }}>Log in</a>
                </li>
              )}
              {!authenticated && (
                <li className={styles.nav_link} onClick={this.onRegister}>
                  <a style={{ cursor: "pointer" }}>Sign up</a>
                </li>
              )}
              {authenticated && (
                <li className={styles.nav_link} onClick={this.onSignOut}>
                  <a style={{ cursor: "pointer" }}>Sign Out</a>
                </li>
              )}
              <li className={styles.nav_link}>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default withFirebase(connect(
  mapStateToProps,
  { modalOpen }
)(Navigation));
