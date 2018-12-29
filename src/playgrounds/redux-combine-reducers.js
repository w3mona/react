import {createStore , combineReducers} from "redux";
import uuid from "uuid";
//ADD_EXPENSE
const addExpense=({description='',note='',amount=0,createdAt=0}={})=>({
type:'ADD_EXPENSE',
expenses:{
    id:uuid(),
    description,
    note,
    amount,
    createdAt

}
});

//REMOVE_EXPENSE
const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
    });

//EDIT_EXPENSE
const editExpense=(updates)=>({
    type:'EDIT_EXPENSE',
    updates
})

//SET_TEXT_FILTER
const filterSerach=(filter)=>({
    type:'SET_TEXT_FILTER',
    filter
});
//SORT_BY_DATE
const sortByDate=()=>({
    type:'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate=(date)=>({
    type:'SET_START_DATE',
    date
});
//SET_END_DATE
const setEndDate=(date)=>({
    type:'SET_END_DATE',
    date

});

const expenseArr=[];
const reducerExp=(state= expenseArr,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expenses);
            return [...state,action.expenses];
        case 'REMOVE_EXPENSE':
           return state.filter(({id})=>action.id!==id);
        case 'EDIT_EXPENSE':
          return  state.map((expense)=>{

                if(expense.id===action.updates.id){
                    return {
                        ...expense ,
                        ...action.updates
                    };
                }
                else{
                    return expense;
                }
            });
        default:
            return state;

    }

}


const filtersArr={text:'', sortBy: 'date' , startDate: undefined , endDate:undefined};
const reducerFilters=(state= filtersArr,action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {...state,...action.filter}
        case "SORT_BY_DATE":
            return {...state,sortBy:'date'}
        case "SORT_BY_AMOUNT":
            return {...state,sortBy:'amount'}
        case "SET_START_DATE":
            return {...state,startDate:action.date}
        case "SET_END_DATE":
            return {...state,endDate:action.date}
        default:
            return state;

    }

}

const getVisibleExpense=(expenses,{text,sortBy,startDate, endDate})=>{
    //console.log(sortBy);
    
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=="number" || expense.createdAt>= startDate;
        const endDateMatch = typeof endDate !=="number" || expense.createdAt<= endDate;
        //const txtMatch = text.toLowerCase()===expense.description.toLowerCase();
        const txtMatch =expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && txtMatch;

    }).sort((a,b)=>{
        if(sortBy==="date"){
            return a.createdAt<b.createdAt ? 1:-1;
        }
        if(sortBy==="amount"){
            return a.amount<b.amount? 1:-1; 
        }
    });

}



const store = createStore(combineReducers({expenses:reducerExp,filters:reducerFilters}));
store.subscribe(()=>{
    const res = store.getState();
    const visableE= getVisibleExpense(res.expenses,res.filters);
    console.log(visableE);
});

const expense1 = store.dispatch(addExpense({description:'rent',amount:'100',createdAt:1000}));
const expense2 = store.dispatch(addExpense({description:'second',amount:'400',createdAt:-1000}));


/*remove*/
//const newExp = store.dispatch(removeExpense({id:expense1.expenses.id}));
/*edit*/
//console.log(expense2.expenses.id);
//store.dispatch(editExpense({id:expense2.expenses.id,description:"Green tea",amount:700}));

//store.dispatch(filterSerach({text:'Rent'}));
//store.dispatch(filterSerach({text:''}));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(900));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(5000));





//console.log(editExp),"here";
//console.log(newExp,"here");
/*
const obj={
    Name: "mona",
    age: 36
}
console.log({...obj,location:"california",age:30});
*/



