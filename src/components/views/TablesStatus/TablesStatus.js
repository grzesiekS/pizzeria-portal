import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import styles from './TablesStatus.module.scss';
import { Link } from 'react-router-dom';

const valuetextTime = value => value.toString().length > 2 ? value.toString().replace('.5', ':30') : `${value.toString()}:00`;

const TablesStatus = ({id='ID_test'}) => {
  return (
    <div className={styles.component}>
      <div className={styles.innerSection}>
        <Grid container justify='space-around'>
          <TextField
            id="date"
            label="Date picker"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Grid item xs={6}>
            <Typography id="discrete-slider" gutterBottom>
              Time Picker
            </Typography>
            <Slider
              defaultValue={12}
              getAriaValueText={valuetextTime}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              valueLabelFormat={valuetextTime}
              step={0.5}
              marks
              min={12}
              max={24}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <h2>Booking</h2>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>ID</Link>
        <h2>Events</h2>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>NEW</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/${id}`}>ID</Link>
      </div>
    </div>
  );
};

TablesStatus.propTypes = {
  id: PropTypes.string,
};

export default TablesStatus;
