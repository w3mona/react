import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from '../../src/components/Dashboard';

test("not found" , ()=>{
   const wrapper = shallow(<Dashboard/>);
    expect(wrapper).toMatchSnapshot();
});