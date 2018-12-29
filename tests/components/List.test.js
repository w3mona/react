import React from 'react';
import {shallow} from 'enzyme';
import {ListExpenses }from '../../src/components/List';
import expenses from "../fixtures/expenses";

test("expense list",()=>{
    const wrapper= shallow(<ListExpenses expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});


test("expense list empty",()=>{
    const wrapper= shallow(<ListExpenses expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});