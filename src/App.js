import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import TablesStatus from './components/views/TablesStatus/TablesStatus';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

import Booking from './components/views/Booking/Booking';
import Order from './components/views/Order/Order';
import Event from './components/views/Event/Event';

import MainLayout from './components/layout/MainLayout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={TablesStatus} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />

          {/* SUB VIEWS */}
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Event} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/order/:id`} component={Order} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
