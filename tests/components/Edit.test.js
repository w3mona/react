import React from 'react';
import {shallow} from 'enzyme';
import  {EditClass} from '../../src/components/Edit';
import expense from '../fixtures/expenses';

const match = {
    params : { 
                id : expense[0].id
             }
   }
let onUpdate,onDelete,wrapper,history;

beforeEach(()=>{
    onUpdate = jest.fn();
    onDelete = jest.fn();
    history= { push: jest.fn() };
    wrapper= shallow(<EditClass history={history} 
                            expenses={expense[0]} 
                            onUpdate={onUpdate} 
                            onDelete={onDelete} match={match} />);

});

test("Edit component render",()=>{
    expect(wrapper).toMatchSnapshot();
});

test("Edit render onupdate",()=>{


          wrapper.find('ExpenseForm').prop('onSubmitxx')(expense[0]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(onUpdate).toHaveBeenLastCalledWith(expense[0], expense[0].id);    
});

test("Edit render ondelete",()=>{

    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onDelete).toHaveBeenLastCalledWith(expense[0].id);
   
});