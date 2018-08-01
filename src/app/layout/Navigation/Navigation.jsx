import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from './Navigation.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Navigation = () => {
  return (
    <header>
      <nav>
        <div className={ styles.left_nav_item }>
          <div className={ styles.main_logo_wrapper }>
            <Link to="/">
              <h1 className={ styles.main_title }>
                <strong>Lets</strong>work!
              </h1>
            </Link>
          </div>

          <SearchBar/>
        
        </div>
    
        <div className={ styles.right_nav_item }>
          <ul className={ styles.nav_links }>
            <li className={ styles.nav_link }>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className={ styles.nav_link }>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li className={ styles.nav_link }>
              <NavLink to="/register">Sign up</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  ) 
}

export default Navigation
