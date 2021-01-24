import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css';
import './styles/styles.scss';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(
  addExpense({ description: 'Water bill', amount: 5400, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 3100, createdAt: 1040 })
);
store.dispatch(
  addExpense({ description: 'Rent', amount: 109500, createdAt: 10000 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
