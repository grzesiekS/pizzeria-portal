import React from 'react';
import {NavLink} from 'react-router-dom';

const PageNav = () => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables Status</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter Menu</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen Menu</NavLink>
  </nav>
);

export default PageNav;
