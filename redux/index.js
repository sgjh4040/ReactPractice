const { createStore } = require('redux');

const reducer = (prestate, action) => { //새로운 state 만ㄷㅡㄹ어줌
    switch (action.type) {
        case 'CHANGE_COM_A':
            return {
                ...prestate,
                compA: action.data
            }
        default:
            return initialState
    }
};

const initialState = {
    compA: 'a',
    compB: 12,
    compC: null,
}


const store = createStore(reducer, initialState);

console.log(store.getState());
store.subscribe(() => {
    console.log('changed')
})

//action 생성자
const changeCompA = (data) => {
    return {
        type: 'CHANGE_COM_A',
        data,
    }
}

const changeCompAtoB = {
    type: 'CHANGE_COMP_A',
    data: 'b',
}  
const changeCompAtoC = {
    type: 'CHANGE_COMP_A_to_C',
    data: 'c',
}


//dispatch
store.dispatch(changeCompA('d'));

console.log(store.getState());


//state, action dispatch, reducer