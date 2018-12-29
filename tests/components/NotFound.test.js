import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../src/components/NotFound';

test("not found" , ()=>{
   const wrapper = shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();
});
