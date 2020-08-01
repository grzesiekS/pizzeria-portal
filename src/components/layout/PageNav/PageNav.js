import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PageNav.module.scss';

const PageNav = () => (
  <nav className={styles.component}>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/dashboard`} activeClassName='active'>Home</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables Status</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter Menu</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen Menu</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Log Out</Button>
  </nav>
);

export default PageNav;
