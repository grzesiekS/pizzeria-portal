import React from 'react';

import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.component}>
    <div className={styles.innerSection}>
      <h2>Login</h2>
      <form>
        <input id='login' type='text' placeholder='Login' required />
        <input id='password' type='password' placeholder='Password' required />
      </form>
    </div>
  </div>
);

export default Login;
