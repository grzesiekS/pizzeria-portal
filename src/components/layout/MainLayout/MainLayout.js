import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <PageNav />
        {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
