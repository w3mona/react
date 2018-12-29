import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../actions/expenses';


export class EditClass extends React.Component{

    onSubmit=(expense)=>{
        this.props.onUpdate(expense,this.props.match.params.id );
        this.props.history.push("/");
    }

    delete=(e)=>{
        this.props.onDelete(this.props.match.params.id );
        this.props.history.push("/");
    }

    render(){
        return (<div>
            <h2>Edit param is {this.props.match.params.id} </h2>
            <ExpenseForm expenses={this.props.expenses}
            onSubmitxx={this.onSubmit}  />
             {this.props.match.params.id ? <button onClick={this.delete}>Delete</button> : ""}
          </div>);
    }
}



const mapStatesToProps =(state,props)=>{
             return {expenses: state.expenses.find((expense)=> expense.id === props.match.params.id)}
    }

    const mapDisptchToProps =(dispatch)=>({
        onUpdate:(expense,id)=>dispatch(editExpense({id:id,...expense})),
        onDelete:(id)=> dispatch(removeExpense({id}))
    });

      


    export default connect(mapStatesToProps,mapDisptchToProps)(EditClass);