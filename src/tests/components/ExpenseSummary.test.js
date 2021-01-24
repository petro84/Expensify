import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should show total for single expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={195} />);
  expect(wrapper).toMatchSnapshot();
});

test('should show total of multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={114195} />);
  expect(wrapper).toMatchSnapshot();
});
