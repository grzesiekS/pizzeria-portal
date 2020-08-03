import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import styles from './TablesStatus.module.scss';
import { Link } from 'react-router-dom';

import {valuetextTime} from '../../utils/valuetextTime';
import {valuenumberTime} from '../../utils/valuenumberTime';
import {mergeEventsOrders} from '../../utils/mergeEventsOrders';

const hours = [12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24];
const events = [
  {
    id: 1,
    date: '2020-08-02',
    hour: '12:30',
    table: [1,2],
    repeat: 'daily',
    duration: 4,
    ppl: 3,
    starters: [],
  },
  {
    id: 2,
    date: '2020-08-02',
    hour: '17:30',
    table: [2],
    repeat: 'daily',
    duration: 4,
    ppl: 3,
    starters: ['bread', 'water'],
  },
  {
    id: 3,
    date: '2020-08-02',
    hour: '17:30',
    table: [3],
    repeat: 'daily',
    duration: 4,
    ppl: 3,
    starters: ['bread'],
  },
];

const booking = [
  {
    id: 1,
    date: '2020-08-03',
    hour: '12:00',
    table: [3],
    duration: 3,
    ppl: 4,
    starters: ['water'],
  },
  {
    id: 2,
    date: '2020-08-03',
    hour: '17:00',
    table: [1],
    duration: 3,
    ppl: 4,
    starters: ['water'],
  },
];

const TablesStatus = () => {
  return (
    <div className={styles.component}>
      <div className={styles.innerSection}>
        <h2 className={styles.title}>Date and time picker</h2>
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
              defaultValue={[12,12]}
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
      <div className={styles.innerSection}>
        <h2 className={styles.title}>Reservations and events list</h2>
        <div className={styles.sectionButtons}>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} color="primary">New Event</Button>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} color="secondary">New Booking</Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Time</TableCell>
                <TableCell align='center'>Table 1</TableCell>
                <TableCell align='center'>Table 2</TableCell>
                <TableCell align='center'>Table 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hours.map(hr => (
                <TableRow key={hr}>
                  <TableCell align='center'>{valuetextTime(hr)}</TableCell>
                  {mergeEventsOrders(events, booking).filter(event => valuenumberTime(event.hour) - 0.1 < hr && valuenumberTime(event.hour) + 0.1 + event.duration > hr)
                    .filter(filterEvent => filterEvent.table.indexOf(1) !== -1).length > 0
                    ?
                    mergeEventsOrders(events, booking).filter(event => valuenumberTime(event.hour) - 0.1 < hr && valuenumberTime(event.hour) + 0.1 + event.duration > hr)
                      .filter(filterEvent => filterEvent.table.indexOf(1) !== -1).map(filterEvent => (
                        <TableCell align='center' key={filterEvent.id}>
                          {filterEvent.type  === 'event'
                            ?
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${filterEvent.id}`} color="primary">{`Event ${filterEvent.id}`}</Button>
                            :
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${filterEvent.id}`} color="secondary">{`Booking ${filterEvent.id}`}</Button>
                          }
                        </TableCell>
                      ))
                    :
                    <TableCell align='center'>---</TableCell>}
                  {mergeEventsOrders(events, booking).filter(event => valuenumberTime(event.hour) - 0.1 < hr && valuenumberTime(event.hour) + 0.1 + event.duration > hr)
                    .filter(filterEvent => filterEvent.table.indexOf(2) !== -1).length > 0
                    ?
                    mergeEventsOrders(events, booking).filter(event => valuenumberTime(event.hour) - 0.1 < hr && valuenumberTime(event.hour) + 0.1 + event.duration > hr)
                      .filter(filterEvent => filterEvent.table.indexOf(2) !== -1).map(filterEvent => (
                        <TableCell align='center' key={filterEvent.id}>
                          {filterEvent.type  === 'event'
                            ?
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${filterEvent.id}`} color="primary">{`Event ${filterEvent.id}`}</Button>
                            :
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${filterEvent.id}`} color="secondary">{`Booking ${filterEvent.id}`}</Button>
                          }
                        </TableCell>
                      ))
                    :
                    <TableCell align='center'>---</TableCell>}
                  {mergeEventsOrders(events, booking).filter(event => valuenumberTime(event.hour) - 0.1 < hr && valuenumberTime(event.hour) + 0.1 + event.duration > hr)
                    .filter(filterEvent => filterEvent.table.indexOf(3) !== -1).length > 0
                    ?
                    mergeEventsOrders(events, booking).filter(event => valuenumberTime(event.hour) - 0.1 < hr && valuenumberTime(event.hour) + 0.1 + event.duration > hr)
                      .filter(filterEvent => filterEvent.table.indexOf(3) !== -1).map(filterEvent => (
                        <TableCell align='center' key={filterEvent.id}>
                          {filterEvent.type  === 'event'
                            ?
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${filterEvent.id}`} color="primary">{`Event ${filterEvent.id}`}</Button>
                            :
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${filterEvent.id}`} color="secondary">{`Booking ${filterEvent.id}`}</Button>
                          }
                        </TableCell>
                      ))
                    :
                    <TableCell align='center'>---</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

TablesStatus.propTypes = {
  id: PropTypes.string,
};

export default TablesStatus;
