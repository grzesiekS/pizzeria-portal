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

const data = {
  labels: ['Cake', 'Breakfast', 'Pizza', 'Salad'],
  datasets: [
    {
      label: `DAILY ORDER STATISTIC`,
      backgroundColor: 'rgba(63,191,63,0.2)',
      borderColor: 'rgba(63,191,63,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(63,191,63,0.4)',
      hoverBorderColor: 'rgba(63,191,63,1)',
      data: [21, 12, 38, 29],
    },
  ],
};

const Dashboard = () => (
  <div className={styles.component}>
    <Grid container spacing={4}>
      <Grid item lg={6} md={12}>
        <div className={styles.innerSection}>
          <h2>Daily order statistic</h2>
          <HorizontalBar data={data} />
        </div>
      </Grid>
      <Grid item lg={6} md={12}>
        <div className={styles.innerSection}>
          <h2>Reservations and events list</h2>
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

export default Dashboard;
