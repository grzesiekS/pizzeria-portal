import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.component}>
    <div className={styles.innerSection}>
      <h2 className={styles.title}>Login</h2>
      <form>
        <TextField id="login" label="Login" />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </form>
      <Button className={styles.link} variant="contained" color="primary" component={NavLink} to={`${process.env.PUBLIC_URL}/dashboard`}>
        Log In
      </Button>
    </div>
  </div>
);

export default Login;
