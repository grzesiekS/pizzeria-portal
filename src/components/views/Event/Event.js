import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import styles from './Event.module.scss';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.props.match.params.id === 'new' ?
      this.state = {
        table1: false,
        table2: false,
        table3: false,
        water: false,
        bread: false,
        defaultDate: '',
        defaultHour: '12:00',
        defaultDuration: 0,
        defaultPpl: 0,
        repeat: false,
      }
      :
      this.state = {
        table1: true,
        table2: true,
        table3: true,
        water: true,
        bread: true,
        defaultDate: '2020-08-02',
        defaultHour: '15:30',
        defaultDuration: 3,
        defaultPpl: 3,
        repeat: true,
      };
  }
  render() {

    const handleChange = (event) => {
      this.setState({...this.state, [event.target.name]: event.target.checked });
    };

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Events</h2>
        <form>
          <TextField
            id="date"
            label="Booking Date"
            type="date"
            defaultValue={this.state.defaultDate}
            className={styles.inputs}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Booking hour"
            type="time"
            defaultValue={this.state.defaultHour}
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
            defaultValue={this.state.defaultDuration}
            className={styles.inputs}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-number"
            label="People"
            type="number"
            defaultValue={this.state.defaultPpl}
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
                    checked={this.state.table1}
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
                    checked={this.state.table2}
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
                    checked={this.state.table3}
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
                    checked={this.state.water}
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
                    checked={this.state.bread}
                    onChange={event => handleChange(event)}
                    name="bread"
                    color="primary"
                  />
                }
                label="Bread"
              />
            </FormGroup>
          </FormControl>
          <FormControl component='fieldset' className={styles.inputs}>
            <FormLabel component="legend">Repeat</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.repeat}
                    onChange={event => handleChange(event)}
                    name="repeat"
                    color="primary"
                  />
                }
                label="Dayli"
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

Event.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Event;
