import{ filterSerach,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../src/actions/filters';
import moment from 'moment';

test("filter search",()=>{
const action1 = filterSerach('123');
expect(action1).toEqual({
    type:'SET_TEXT_FILTER',
    filter:'123'
});
});


test("sortByAmount",()=>{
    const action2 = sortByAmount();
    expect(action2).toEqual({
        type:'SORT_BY_AMOUNT'
    });

    });

test("sortByDate",()=>{
    const action3 = sortByDate();
    expect(action3).toEqual({
        type:'SORT_BY_DATE'
    });

    });

test("setStartDate",()=>{
    const action4 = setStartDate(moment(60));
    expect(action4).toEqual({
        type:'SET_START_DATE',
        date:moment(60)
    });

    });


test("setStartDate",()=>{
    const action5 = setEndDate(moment(60));
    expect(action5).toEqual({
        type:'SET_END_DATE',
        date:moment(60)
    });

    });