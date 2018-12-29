import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

import {removeExpense} from '../actions/expenses';




export default class ExpenseForm extends React.Component{
     //now = moment();
        //console.log(now.format('MMM Do, YYYY'));
        constructor(props){
        
            super(props);
            //console.log(props.expenses.createdAt,"vvv");
            this.state={
                
                id:props.expenses ? props.expenses.id: '',
                description:props.expenses ? props.expenses.description : '' ,
                notes:props.expenses ? props.expenses.notes : '',
                amount: props.expenses ? props.expenses.amount.toString() : '',
                createdAt: props.expenses ? moment(props.expenses.createdAt)   : moment(),
                calendarFocused:false,
                error: ''
            }

           // console.log(props.expenses);
        }

    desciptionChanged=(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}));
    }

    notesChanged=(e)=>{
        const notes = e.target.value;
        //e.persist();
        this.setState(()=>({notes}));
    }

    amountChanged=(e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.{1}\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}));
        }

        

    }

    onSubmitxx=(e)=>{
            e.preventDefault();
            if(!this.state.description || !this.state.amount){
                const error= "Error: Description or amount can't be empty";
                this.setState(()=>({error}));
                
            }
            else
            {
                this.setState(()=>({error:''})); 
            
              
                this.props.onSubmitxx({

                    description: this.state.description,
                    notes: this.state.notes,
                    amount: parseFloat(this.state.amount,10),
                    createdAt: this.state.createdAt.valueOf()
                })
            }
    }

    onFocusChange=({focused})=>{
        //console.log({focused});
        this.setState(()=>({calendarFocused: focused}));
    }
        render(){
            return(
                <div>
                {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmitxx}>
                        <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.desciptionChanged}/>
                        <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.amountChanged} />
                        <SingleDatePicker
                                date={this.state.createdAt} 
                                onDateChange={this.onDateChange} 
                                focused={this.state.calendarFocused} 
                                onFocusChange={this.onFocusChange } 
                                numberOfMonths={1}
                                isOutsideRange={()=>false}/>
                        <textarea placeholder="Add Notes To Expense" onChange={this.notesChanged}   value={this.state.notes} ></textarea>
                        <button>{this.state.id ? "Update Expense" : "Add Expense"}</button>

                        

                        
                    </form>
                </div>
            );
        }

}