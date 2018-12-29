import {createStore , combineReducers} from "redux";
import reducerExp from "../reducers/expenses";
import reducerFilters from "../reducers/filters";

export default()=>{
    const store = createStore(combineReducers(
        {
        expenses:reducerExp,
        filters:reducerFilters
        }
    ),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;

}

/*store.subscribe(()=>{
    const res = store.getState();
    const visableE= getVisibleExpense(res.expenses,res.filters);
    console.log(visableE);
});*/
