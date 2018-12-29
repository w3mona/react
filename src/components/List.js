import React from 'react';
import {connect} from 'react-redux';
import ListExpensesItem from './ListItem';
import getVisibleExpense from '../selectors/expense';
import ExpenseListFilter from './ListFilter';


//<p>Filters:{props.filters.text}</p>

export const ListExpenses = (props) =>(
    <div>
    <ExpenseListFilter/>
    {
        props.expenses.length===0 ?( "No Expenses" ): (
        
             props.expenses.map((expense )=>(
                <ListExpensesItem key={expense.id} {...expense} />
            ))
    )
        
    }
    
      
    </div>);


const mapStatesToProps=(state)=>{
    //return getVisibleExpense(state.expenses,state.filters)
    return{
        expenses:getVisibleExpense(state.expenses,state.filters) ,
        filters:state.filters
    }
}

export default connect(mapStatesToProps)(ListExpenses);