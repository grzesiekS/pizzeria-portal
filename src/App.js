import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './components/views/Dashboard/Dashboard';

import MainLayout from './components/layout/MainLayout/MainLayout';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
