import moment from 'moment';


const getVisibleExpense=(expenses,{text,sortBy,startDate, endDate})=>{
    
    
    
    return expenses.filter((expense)=>{
        const createdAtMoment =moment(expense.createdAt);
        //console.log(moment(expense.createdAt));

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true;
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true;
        //const txtMatch = text.toLowerCase()===expense.description.toLowerCase();
        const txtMatch = expense.description.toLowerCase().includes(text.toLowerCase());
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

export default getVisibleExpense;