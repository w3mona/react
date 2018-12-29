import React from 'react';
import {shallow} from 'enzyme';
import  { Create } from '../../src/components/Create';
import expense from '../fixtures/expenses';
//mport { createMemoryHistory } from 'history'

let onSubmityy,wrapper,history;

beforeEach(()=>{
    onSubmityy = jest.fn();
   
    history= { push: jest.fn() };
    wrapper= shallow(<Create history={history} onSubmityy={onSubmityy} />);
   // history =createMemoryHistory("/");
});

test("create component render",()=>{
    expect(wrapper).toMatchSnapshot();
});

test("create render onsubmit",()=>{

        wrapper.find("ExpenseForm").prop("onSubmitxx")(expense[0]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(onSubmityy).toHaveBeenLastCalledWith(expense[0]);
       
});