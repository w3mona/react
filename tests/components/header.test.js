import React from 'react';
import Header from '../../src/components/Header';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme';

test("test header component",()=>{
    const wrapper = shallow(<Header/>);

    expect(toJSON(wrapper)).toMatchSnapshot();

   // expect(wrapper.find('h1').text()).toBe('Expensify');


    /*
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    */


})