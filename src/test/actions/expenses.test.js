import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const expenseDate = {
        amount: 10000, 
        createdAt: 1000, 
        description: 'rent', 
        note: 'rent amount'
    };

    const action = addExpense(expenseDate);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseDate,
            id: expect.any(String)
        }
    })

});

test('Should setup add expenses action obj with default values', () => {

    const defaultValues = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...defaultValues,
            id: expect.any(String)
        }
    })
    
});