import getVisibleExpense from '../../src/selectors/expense';
import moment from 'moment';
const convertDate=(date)=>{
    var dateString = date;
  var dateObj = new Date(dateString);
  var momentObj = moment(dateObj).valueOf();
  var momentString = momentObj.valueOf();
  //console.log(momentString);
  
  return momentObj ;
  }
const expensesArr=[
    {
        id: '1',
        description: 'rent bill',
        notes:'',
        amount:100,
        createdAt:convertDate('2018-10-1')
    },
    {
        id: '1',
        description: 'elec bill',
        notes:'',
        amount:300,
        createdAt:convertDate('2018-11-01')
    },
    {
        id: '1',
        description: 'any',
        notes:'',
        amount:100,
        createdAt:convertDate('2018-12-01')
    }
];



test("selector",()=>{
    const filters={
        text:'bill',
        sortBy:'date',
        startDate: undefined,
        endDate:undefined
    }
  const res2= getVisibleExpense(expensesArr,filters);
  expect(res2).toEqual([expensesArr[1],expensesArr[0]]);
});


test("filter startDate",()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(convertDate('2018-11-01')),
        endDate:moment(convertDate('2018-12-05'))
    }
  const res2= getVisibleExpense(expensesArr,filters);
  expect(res2).toEqual([expensesArr[2],expensesArr[1]]);
});