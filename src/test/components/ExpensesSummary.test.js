import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should rencer Expenses summary with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenseCount={1} 
            expensesTotal={235}
        /> 
    );
    expect(wrapper).toMatchSnapshot();
});

test('should rencer Expenses summary with multiple expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenseCount={20} 
            expensesTotal={32165412346587546}
        /> 
    );
    expect(wrapper).toMatchSnapshot();

});