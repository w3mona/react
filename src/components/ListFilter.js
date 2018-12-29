import React from 'react';
import {connect} from 'react-redux';
import {filterSerach,sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilter extends React.Component{
    constructor(props){
            super(props);
            this.state={
                calendarFocused:null
            }
    }

    onDatesChange=({startDate,endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);

    }



      filterTextChanged=(e)=>{
        this.props.SetText(e.target.value);
   
        }

        filterSelectChanged =(e)=>{
            
            if(e.target.value=="date")
            {
                
                this.props.SetByDate();
            }
            else if(e.target.value=="amount"){
                this.props.SetByAmount();
            }
           
        }
       


    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    }

    render(){
        return (<div>
            <input 
            type="text" 
            value={this.props.filters.text} 
            onChange={this.filterTextChanged} 
            />

            <select onChange={this.filterSelectChanged}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
            startDate={this.props.filters.startDate} 
            endDate={this.props.filters.endDate} 
            onDatesChange={this.onDatesChange} 
            focusedInput={this.state.calendarFocused} 
            onFocusChange={this.onFocusChange}  
            isOutsideRange={()=>false}
            numberOfMonths={1}
            showClearDates={true}
            ></DateRangePicker>
        </div>);
    }
}

const mapStateToProps=(state)=>({
    filters: state.filters
});

const mapDispatchToProps=(dispatch)=>({
    setStartDate: (startDate)=>dispatch(setStartDate(startDate)),
    setEndDate:(endDate)=> dispatch(setEndDate(endDate)),
    SetText:(text)=>dispatch(filterSerach({text})),
    SetByDate: ()=>dispatch(sortByDate()),
    SetByAmount:()=>dispatch(sortByAmount())
    
    

})



export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter);

