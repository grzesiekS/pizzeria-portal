import React from 'react';
import PropTypes from 'prop-types';

import styles from './Event.module.scss';

class Event extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <h2>Event view</h2>
        <p>{this.props.match.params.id}</p>
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
