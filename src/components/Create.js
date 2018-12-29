import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export class Create extends  React.Component{
  onSubmit=(expense)=>{
    this.props.onSubmityy(expense);
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
      <h2>Add new Expense</h2>
      <ExpenseForm onSubmitxx={this.onSubmit}/>
    </div>
    );
    }

}


const mapDispatchToProps=(dispatch)=>(
    {
      onSubmityy:(expense)=>dispatch(addExpense(expense))
    }
  );
export default connect(undefined,mapDispatchToProps)(Create);