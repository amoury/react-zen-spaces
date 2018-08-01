import React, { Component, Fragment } from 'react';
import { Search } from 'semantic-ui-react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  render () {
    return (
      <Fragment>
        <Search className={styles.search_form_wrapper} icon='search' size='small'/>
      </Fragment>
    )
  }
}

export default SearchBar;