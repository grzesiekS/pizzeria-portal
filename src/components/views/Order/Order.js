import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';

class Order extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <h2>Order view</h2>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

Order.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Order;
