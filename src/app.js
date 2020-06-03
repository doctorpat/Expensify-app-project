import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import {addExpense} from './actions/Expenses';
import {setTextFilter} from './actions/Filters';
import getVisibleExpenses from './selectors/Expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 4500}));
store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'rent', amount: 109500}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

 ReactDOM.render(jsx, document.getElementById('app'));
