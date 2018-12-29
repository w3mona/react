const expenseArr=[];
export default(state= expenseArr,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expenses);
            return [...state,action.expenses];
        case 'REMOVE_EXPENSE':
           return state.filter(({id})=>action.id!==id);
        case 'EDIT_EXPENSE':
          return  state.map((expense)=>{

                if(expense.id===action.updates.id){
                    return {
                        ...expense ,
                        ...action.updates
                    };
                }
                else{
                    return expense;
                }
            });
        default:
            return state;

    }

}
