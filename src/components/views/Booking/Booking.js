import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

import styles from './Booking.module.scss';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      table1: false,
      table2: false,
      table3: false,
      water: false,
      bread: false,
    };
  }

  render() {

    const handleChange = (event) => {
      this.setState({...this.state, [event.target.name]: event.target.checked });
    };

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Booking</h2>
        {this.props.match.params.id === 'new' ?
          <form>
            <TextField
              id="date"
              label="Booking Date"
              type="date"
              className={styles.inputs}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              label="Booking hour"
              type="time"
              defaultValue="12:00"
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
          </form>
          :
          <p>{this.props.match.params.id}</p>}
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
