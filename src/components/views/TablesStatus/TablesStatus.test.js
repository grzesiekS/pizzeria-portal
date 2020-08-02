import React from 'react';
import {shallow} from 'enzyme';
import TablesStatus from './TablesStatus';

describe('Component TablesStatus', () => {
  it('should render without crashing', () => {
    const component = shallow(<TablesStatus />);
    expect(component).toBeTruthy();
  });
});
