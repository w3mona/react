import React from 'react';
import {shallow} from 'enzyme';
import {ListExpensesItem }from '../../src/components/ListItem';
import expense from "../fixtures/expenses";

test("list item",()=>{

    const wrapper= shallow(<ListExpensesItem {...expense[0]} />);
    expect(wrapper).toMatchSnapshot();
});

/*
test("expense list empty",()=>{
    const wrapper= shallow(<ListExpenses expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});*/