import React from 'react';
import PropTypes from 'prop-types';

import styles from './TablesStatus.module.scss';
import { Link } from 'react-router-dom';

const TablesStatus = ({id='ID_test'}) => (
  <div className={styles.component}>
    <h2>TablesStatus view</h2>
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

TablesStatus.propTypes = {
  id: PropTypes.string,
};

export default TablesStatus;
