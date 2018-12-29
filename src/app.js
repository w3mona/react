import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Store from './store/store';
import {addExpense} from './actions/expenses';
import {filterSerach} from './actions/filters';
import expensesReducer from "./reducers/expenses";
import filterReducer from "./reducers/filters";
import getVisibleExpense from "./selectors/expense";
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const MyStore = Store();

const convertDate=(date)=>{
  var dateString = date;
var dateObj = new Date(dateString);
var momentObj = moment(dateObj);
var momentString = momentObj.format('YYYY-MM-DD');

return momentString;
}
//const res = MyStore.getState();

MyStore.dispatch(addExpense({description:'Water Bill' , note:'water bill note' , amount:1200 , createdAt:convertDate('2018-10-06')}));
MyStore.dispatch(addExpense({description:'Gas Bill' , note:'gas bill note' , amount:700 , createdAt:convertDate('2018-11-03')}));
MyStore.dispatch(addExpense({description:'rent' , note:'' , amount:109500 , createdAt:convertDate('2018-12-04')}));

/*
MyStore.dispatch(filterSerach({text:'water'}));

  setTimeout(()=>{
    MyStore.dispatch(filterSerach({text:'bill'}));
  },3000);
  */

const res = MyStore.getState();
//console.log(res);
//const visableE= getVisibleExpense(res.expenses,res.filters);
//console.log(visableE,"final");

  
const jsx = (<Provider store={MyStore}>
                    <AppRouter/>
            </Provider>);
  ReactDOM.render(jsx,document.getElementById("app"));