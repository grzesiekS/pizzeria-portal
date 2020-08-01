import React from 'react';
import TextField from '@material-ui/core/TextField';

import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.component}>
    <div className={styles.innerSection}>
      <h2 className={styles.title}>Login</h2>
      <form>
        <TextField id="login" label="Login" className />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </form>
    </div>
  </div>
);

export default Login;
