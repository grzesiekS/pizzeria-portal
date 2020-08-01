import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from './Dashboard';

describe('Component Dashboard', () => {
  it('should render without crashing', () => {
    const component = shallow(<Dashboard />);
    expect(component).toBeTruthy();
  });

  it('should render section with statistic chart', () => {
    const component = shallow(<Dashboard />);
    expect(component.find('HorizontalBar').length).toEqual(1);
  });
});
