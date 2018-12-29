import {addExpense,editExpense,removeExpense} from '../../src/actions/expenses';

test("delete expense",()=>{
    const action = removeExpense({id:1234});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:1234
    })
});

test("edit expense",()=>{
    const action2 = editExpense({id:123,description:'hello'});
    expect(action2).toEqual({
        type:'EDIT_EXPENSE',
        updates:{id:123,description:'hello'}
    })
});

test("add expense",()=>{
    const action3 = addExpense({note:'123',description:'hello',amount:1,createdAt:0});
    expect(action3).toEqual({
        type:'ADD_EXPENSE',
        expenses:{
                id:expect.any(String),
                description:'hello',
                amount:1,
                createdAt:0,
                note:'123'
        }

    })
});

test("add expense with empty object",()=>{
    const action4 = addExpense();
    expect(action4).toEqual({
        type:'ADD_EXPENSE',
        expenses:{
                id:expect.any(String),
                description:'',
                note:'',
                amount:0,
                createdAt:0
        }

    })
});