import { createStore } from 'redux';

const incrmentCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({ decrementBy = 1 } = {} ) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
};

const setCount = ({ count = 101} = {}) => {
    return {
        type: 'SET',
        count
    }

};

const resetCount = () => {
    return {
        type: 'RESET'
    }
};

//Reducers 

const countReducer = ( state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrmentCount({ incrementBy: 5 }));

store.dispatch(incrmentCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 10 }));

store.dispatch(setCount());


