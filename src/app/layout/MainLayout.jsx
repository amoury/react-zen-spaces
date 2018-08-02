import React, { Fragment } from 'react';
import Navigation from './Navigation/Navigation';


const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />


      { children }
 
    </Fragment>
  )
}

export default MainLayout
