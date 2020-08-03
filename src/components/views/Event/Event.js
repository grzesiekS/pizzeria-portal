import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import shortid from 'shortid';

import styles from './Event.module.scss';

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

class Event extends React.Component {

  render() {

    const filterEvents = eventsData => {
      const filteredData = [...eventsData].filter(element => element.id.toString() === this.props.match.params.id);
      if(filteredData.length === 0) {
        filteredData.push(
          {
            id: shortid.generate(),
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
        <h2 className={styles.title}>{`Event ${this.props.match.params.id}`}</h2>
        <form>
          <TextField
            id="date"
            label="Event Date"
            type="date"
            defaultValue={filterEvents(events)[0].date}
            className={styles.inputs}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Event hour"
            type="time"
            defaultValue={filterEvents(events)[0].hour}
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
            defaultValue={filterEvents(events)[0].duration}
            className={styles.inputs}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-number"
            label="People"
            type="number"
            defaultValue={filterEvents(events)[0].ppl}
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
                    checked={filterEvents(events)[0].table.indexOf(1) !== -1 ? true : false}
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
                    checked={filterEvents(events)[0].table.indexOf(2) !== -1 ? true : false}
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
                    checked={filterEvents(events)[0].table.indexOf(3) !== -1 ? true : false}
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
                    checked={filterEvents(events)[0].starters.indexOf('water') !== -1 ? true : false}
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
                    checked={filterEvents(events)[0].starters.indexOf('bread') !== -1 ? true : false}
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
                    checked={filterEvents(events)[0].repeat === 'daily' ? true : false}
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
