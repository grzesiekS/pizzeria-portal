import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './Dashboard.module.scss';

const dbDataOrders = [
  {
    address: 'a1',
    phone: '12345463643',
    totalPrice: 40,
    totalNumber: 1,
    subtotalPrice: 20,
    deliveryFee: 20,
    products: [
      {
        id: 'pizza',
        amount: 8,
        price: 20,
        priceSingle: 20,
        params: {
          sauce: {
            tomato: 'tomato',
          },
          toppings: {
            olives: 'olives',
            redPeppers: 'redPeppers',
            greenPeppers: 'greenPeppers',
            mushrooms: 'mushrooms',
            basil: 'basil',
          },
          crust: {
            standard: 'standard',
          },
        },
      },
    ],
    id: 1,
  },
  {
    address: 'a1',
    phone: '12345463643',
    totalPrice: 60,
    totalNumber: 2,
    subtotalPrice: 40,
    deliveryFee: 20,
    products: [
      {
        id: 'pizza',
        amount: 15,
        price: 40,
        priceSingle: 20,
        params: {
          sauce: {
            tomato: 'tomato',
          },
          toppings: {
            olives: 'olives',
            redPeppers: 'redPeppers',
            greenPeppers: 'greenPeppers',
            mushrooms: 'mushrooms',
            basil: 'basil',
          },
          crust: {
            standard: 'standard',
          },
        },
      },
    ],
    id: 2,
  },
  {
    address: 'a1',
    phone: '12345463643',
    totalPrice: 47,
    totalNumber: 3,
    subtotalPrice: 27,
    deliveryFee: 20,
    products: [
      {
        id: 'cake',
        amount: 9,
        price: 27,
        priceSingle: 9,
        params: {},
      },
    ],
    id: 3,
  },
  {
    address: 'a1',
    phone: '12345463643',
    totalPrice: 47,
    totalNumber: 3,
    subtotalPrice: 27,
    deliveryFee: 20,
    products: [
      {
        id: 'salad',
        amount: 7,
        price: 27,
        priceSingle: 9,
        params: {
          ingredients: {
            cucumber: 'cucumber',
            tomatoes: 'tomatoes',
            salad: 'salad-olives',
            herbs: 'herbs',
          },
        },
      },
    ],
    id: 4,
  },
];

const countOrders = dataOrders => {
  const ordersCount = {};
  dataOrders.forEach(element => {
    element.products.forEach(product => {
      if(ordersCount[product.id] === undefined) {
        ordersCount[product.id] = product.amount;
      } else {
        ordersCount[product.id] = ordersCount[product.id] + product.amount;
      }
    });
  });
  return ordersCount;
};

const Dashboard = () => {

  const data = {
    labels: ['Cake', 'Breakfast', 'Pizza', 'Salad'],
    datasets: [
      {
        label: `DAILY ORDER STATISTIC`,
        backgroundColor: 'rgba(43,76,111,0.2)',
        borderColor: 'rgba(43,76,111,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(43,76,111,0.4)',
        hoverBorderColor: 'rgba(43,76,111,1)',
        data: [countOrders(dbDataOrders).cake, countOrders(dbDataOrders).breakfast, countOrders(dbDataOrders).pizza, countOrders(dbDataOrders).salad],
      },
    ],
  };
  return (
    <div className={styles.component}>
      <Grid container spacing={4}>
        <Grid item lg={6} md={12}>
          <div className={styles.innerSection}>
            <h2 className={styles.title}>Order statistic</h2>
            <HorizontalBar data={data} />
          </div>
        </Grid>
        <Grid item lg={6} md={12}>
          <div className={styles.innerSection}>
            <h2 className={styles.title}>Reservations and events list</h2>
            <TableContainer component={Paper} className='table'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Reservation/Event Start</TableCell>
                    <TableCell align='center'>Reservation/Event End</TableCell>
                    <TableCell align='center'>Tables No</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align='center'>12:00</TableCell>
                    <TableCell align='center'>14:00</TableCell>
                    <TableCell align='center'>1,2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align='center'>13:00</TableCell>
                    <TableCell align='center'>14:30</TableCell>
                    <TableCell align='center'>3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
