import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibaleExpenses from './selectors/expenses'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch( addExpense({ description: ' Water Bill', amount: 45000}));
store.dispatch( addExpense({ description: 'Rent', createdAt: 1000 }));
store.dispatch( addExpense({ description: ' gas Bill', amount: 109500}));

const state = store.getState();
const visibaleExpenses = getVisibaleExpenses( state.expenses, state.filters );


console.log(visibaleExpenses);

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
