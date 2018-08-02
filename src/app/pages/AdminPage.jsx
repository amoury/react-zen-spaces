import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AdminLayout from '../layout/AdminLayout';
import AdminDashboard from '../admin/AdminDashboard';
import AdminSpaces from '../admin/AdminSpaces';
import AdminEvents from '../admin/AdminEvents';
import AdminEditSpaceForm from '../admin/AdminEditSpaceForm';



const AdminPage = () => {
  return <AdminLayout>
      <Switch>
        <Redirect exact from="/admin" to="/admin/dashboard" />
        <Route path="/admin/spaces/edit/:id" component={AdminEditSpaceForm} />
        <Route path="/admin/spaces/new" component={AdminEditSpaceForm} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/spaces" component={AdminSpaces} />
        <Route path="/admin/events" component={AdminEvents} />
      </Switch>
    </AdminLayout>;
}

export default AdminPage
