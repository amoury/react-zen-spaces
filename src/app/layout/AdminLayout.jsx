import React from 'react';
import { Grid } from 'semantic-ui-react';

import AdminNavigation from '../admin/AdminNavigation';

const AdminLayout = (props) => {
  return (
    <Grid>
      <Grid.Column width={4}>
        <AdminNavigation />
      </Grid.Column>
      <Grid.Column width={12} style={{paddingTop: "50px" }}>
        {props.children}
      </Grid.Column>
    </Grid>
  )
}

export default AdminLayout
