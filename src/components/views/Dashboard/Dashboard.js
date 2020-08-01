import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';

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
        </div>
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
