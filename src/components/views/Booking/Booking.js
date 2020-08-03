import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import styles from './Booking.module.scss';

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


class Booking extends React.Component {

  render() {
    const filterBooking = bookingData => {
      const filteredData = [...bookingData].filter(element => element.id.toString() === this.props.match.params.id);
      if(filteredData.length === 0) {
        filteredData.push(
          {
            date: '',
            hour: '',
            table: [],
            duration: 0,
            ppl: 1,
            starters: [],
          }
        );
      }
      return filteredData;
    };

    const handleChange = (event) => {
      this.setState({...this.state, [event.target.name]: event.target.checked });
    };

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{`Booking ${this.props.match.params.id}`}</h2>
        <form>
          <TextField
            id="date"
            label="Booking Date"
            type="date"
            defaultValue={filterBooking(booking)[0].date}
            className={styles.inputs}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Booking hour"
            type="time"
            defaultValue={filterBooking(booking)[0].hour}
            className={styles.inputs}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: 12,
              step: 1800, // 30 min
            }}
          />
          <TextField
            id="standard-number"
            label="Duration"
            type="number"
            defaultValue={filterBooking(booking)[0].duration}
            className={styles.inputs}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-number"
            label="People"
            type="number"
            defaultValue={filterBooking(booking)[0].ppl}
            className={styles.inputs}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl component='fieldset' className={styles.inputs}>
            <FormLabel component="legend">Tables in restaurant</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterBooking(booking)[0].table.indexOf(1) !== -1 ? true : false}
                    onChange={event => handleChange(event)}
                    name="table1"
                    color="primary"
                  />
                }
                label="Table-1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterBooking(booking)[0].table.indexOf(2) !== -1 ? true : false}
                    onChange={event => handleChange(event)}
                    name="table2"
                    color="primary"
                  />
                }
                label="Table-2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterBooking(booking)[0].table.indexOf(3) !== -1 ? true : false}
                    onChange={event => handleChange(event)}
                    name="table3"
                    color="primary"
                  />
                }
                label="Table-3"
              />
            </FormGroup>
          </FormControl>
          <FormControl component='fieldset' className={styles.inputs}>
            <FormLabel component="legend">Starters</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterBooking(booking)[0].starters.indexOf('water') !== -1 ? true : false}
                    onChange={event => handleChange(event)}
                    name="water"
                    color="primary"
                  />
                }
                label="Water"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterBooking(booking)[0].starters.indexOf('bread') !== -1 ? true : false}
                    onChange={event => handleChange(event)}
                    name="bread"
                    color="primary"
                  />
                }
                label="Bread"
              />
            </FormGroup>
          </FormControl>
          <Button variant="contained" color="primary" className={styles.inputs}>
            Add / Change
          </Button>
        </form>
      </div>
    );
  }
}

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Booking;
