import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';



const  createMockStore = configureMockStore([ thunk ]);

test('Should setup remove expenses action obj', () => {
    const removeAction = removeExpense({ id: '123abc' });
    expect(removeAction).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('Should setup edit expenses action obj', () => {
    const editAction = editExpense('123abc', { note: 'New Note' } );
    expect(editAction).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'New Note' }
    })
});

test('should setup add expense action obj with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to db and store', (done) => {
    const store = createMockStore( {} );
    const expenseData = {
        description: 'something',
        amount: 123546897,
        note: 'note',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to db and store', (done) => {
    const store = createMockStore( {} );
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });

});

// test('Should setup add expenses action obj with default values', () => {

//     const defaultValues = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }
//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense : {
//             ...defaultValues,
//             id: expect.any(String)
//         }
//     })
    
// });