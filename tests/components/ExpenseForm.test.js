import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../src/components/ExpenseForm';
import expense from '../fixtures/expenses';
import moment from 'moment';

test("expense form",()=>{
    const x = shallow(<ExpenseForm/>);
    expect(x).toMatchSnapshot();
});

test("expense form with data",()=>{
    const x = shallow(<ExpenseForm expenses={expense[0]} />);
    expect(x).toMatchSnapshot();
});

test("TEST SUBMIT",()=>{
    const x = shallow(<ExpenseForm   />);
    x.find('form').simulate('submit',{
        preventDefault:()=>{}

    });

    expect(x.state('error').length).toBeGreaterThan(0);
    expect(x).toMatchSnapshot();
});


test("description changed",()=>{
    const x = shallow(<ExpenseForm   />);
    const value = "new description";
    x.find('input').at(0).simulate('change',{
        target: {value}

    });
    expect(x.state('description')).toBe(value);


});


test("notes changed",()=>{
    const x = shallow(<ExpenseForm   />);
    const value = "new note";
    x.find('textarea').at(0).simulate('change',{
        target: {value}

    });
    expect(x.state('notes')).toBe(value);


});

test("valid amount",()=>{
    const x = shallow(<ExpenseForm   />);
    const value = "20.22";
    x.find('input').at(1).simulate('change',{
        target: {value}

    });
    expect(x.state('amount')).toBe(value);
});

test("invalid amount",()=>{
    const x = shallow(<ExpenseForm   />);
    const value = "20.223";
    x.find('input').at(1).simulate('change',{
        target: {value}

    });
    expect(x.state('amount')).toBe('');
});


test("TEST SUBMITxx prop",()=>{
    const spyFn = jest.fn();
    const x = shallow(<ExpenseForm  expenses={expense[2]} onSubmitxx={spyFn}  />);
    x.find('form').simulate('submit',{
        preventDefault:()=>{}

    });

    expect(x.state('error')).toBe('');
    expect(spyFn).toHaveBeenLastCalledWith({
        description:expense[2].description,
        notes:expense[2].notes,
        amount:expense[2].amount,
        createdAt:expense[2].createdAt
    });
});


test("datepicker changed",()=>{
    const x = shallow(<ExpenseForm   />);
    const now = moment();

    x.find('SingleDatePicker').prop("onDateChange")(now);
    expect(x.state('createdAt')).toEqual(now);
});

test("datepicker on focus",()=>{
    const x = shallow(<ExpenseForm   />);
   // const now2 = moment();
   const focused = true;

    x.find('SingleDatePicker').prop("onFocusChange")({focused});
    expect(x.state('calendarFocused')).toEqual(focused);
});