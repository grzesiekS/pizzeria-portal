import React from 'react';
import PropTypes from 'prop-types';

import styles from './Booking.module.scss';

class Booking extends React.Component {
  render() {
    console.log(this);
    return (
      <div className={styles.component}>
        <h2>Booking view</h2>
        {/* eslint-disable-next-line no-use-before-define */}
        <p>{this.props.match.params.id}</p>
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
