import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import TablesStatus from './components/views/TablesStatus/TablesStatus';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/KitchenContainer';

import Booking from './components/views/Booking/Booking';
import Order from './components/views/Order/OrderContainer';
import Event from './components/views/Event/Event';

import MainLayout from './components/layout/MainLayout/MainLayout';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={TablesStatus} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />

                {/* SUB VIEWS */}
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Event} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
