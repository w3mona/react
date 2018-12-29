import React from 'react';
import {shallow} from 'enzyme';
import  {ExpenseListFilter} from '../../src/components/ListFilter';
import { filters, altFilters } from '../fixtures/filters';
import { sortByDate, sortByAmount } from '../../src/actions/filters';

let wrapper,setStartDate,setEndDate,SetText, SetByDate, SetByAmount, focusChanged;


beforeEach(()=>{
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    SetText= jest.fn();
    SetByDate=  jest.fn();
    SetByAmount=jest.fn();
    focusChanged=jest.fn();
    
   wrapper= shallow(<ExpenseListFilter
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        SetText={SetText}
                        SetByDate={SetByDate}
                        SetByAmount={SetByAmount}
                        filters={filters}
    
    />);

});

test(" component render",()=>{
    expect(wrapper).toMatchSnapshot();
});

test("test with altfilters",()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test("text changed",()=>{
   const value="bill";

    wrapper.find("input").simulate("change",{
        target:{value}
    });
    expect(SetText).toHaveBeenLastCalledWith(value);
});


test("sort by date",()=>{
    const value="date";
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find("select").simulate("change",{
        target:{value}
    });
    expect(SetByDate).toHaveBeenCalled()
});


test("sort by amount",()=>{
   const value="amount";

    wrapper.find("select").simulate("change",{
        target:{value}
    });
    expect(SetByAmount).toHaveBeenCalled()
});


test("set start date",()=>{

    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find("DateRangePicker").prop("onDatesChange")({startDate:filters.startDate,endDate:filters.setEndDate});
    expect(setStartDate).toHaveBeenLastCalledWith(filters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(filters.endDate);
});


test("set focus change",()=>{
    wrapper.find("DateRangePicker").prop("onFocusChange")('startDate');
    expect(wrapper.state("calendarFocused")).toBe('startDate');
   
});