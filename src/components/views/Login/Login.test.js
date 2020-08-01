import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';

describe('Component Login', () => {
  it('should render without crashing', () => {
    const component = shallow(<Login />);
    expect(component).toBeTruthy();
  });

  it('should render input boxes for login and password', () => {
    const component = shallow(<Login />);
    expect(component.find('#login').length).toEqual(1);
    expect(component.find('#password').length).toEqual(1);
  });
});
