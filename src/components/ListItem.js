import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
import moment from 'moment';
// 
//<button onClick={()=>dispatch(removeExpense({id}))} >Delete</button>

 export const ListExpensesItem = ({id,description,amount,createdAt})=>{
   
    return (
        <div >
            <h3> <Link to={`/edit/${id}`} ><h3>{description}</h3></Link></h3>
            <p>Amount:{amount} - {moment(createdAt).format("MM/DD/YYYY")}</p>
           
        </div>

    );
    
}

export default  connect()(ListExpensesItem);
   


