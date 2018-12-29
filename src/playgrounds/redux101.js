import {createStore} from "redux";
const store= createStore((state={count:0 },action)=> {

    switch(action.type)
        {
            case "INCREMENT":
                //state.count = (state.count)+1;
                //return state;
                return {count:state.count+action.incrementBy}
            case "DECREMENT":
                return {count:state.count-action.decrementBy}
            case "RESET":
                return {count:0}
            case "SET":
                return {count:action.count}
            default:
                return state;
        }
   
});

const increment=({incrementBy:inc=1} = {} )=>({
    type:'INCREMENT',
    incrementBy:inc
});


const decrement=({decrementBy:dec=1} = {} )=>({
    type:'DECREMENT',
    decrementBy:dec
});

const reset=()=>({
type:'RESET'
});

const setCount=(val)=>({
    type:'SET',
    count:val
    });


store.subscribe(()=>{
    console.log(store.getState());
});


/*
const unsubscripe = store.subscribe(()=>{
    console.log(store.getState());
});*/

store.dispatch(increment({incrementBy:5}));

//unsubscripe();


store.dispatch(decrement({decrementBy:10}));



store.dispatch(reset());
store.dispatch(setCount(101));

