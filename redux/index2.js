const { createStore } = require('redux');

const reducer = (prestate, action) => { //새로운 state 만ㄷㅡㄹ어줌
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...prestate,
                user: action.data
            }
        case 'LOG_OUT':
        return{
            ...prestate,
            user: null
        }
        case 'ADD_POST':
        return{
            ...prestate,
            posts: [...prestate.posts,action.data]
        }
        default:
            return initialState
    }
};

const initialState = {
    user: null,
    posts:[]
}


const store = createStore(reducer, initialState);

console.log(store.getState());
store.subscribe(() => {
    console.log('changed')
})

//action 생성자
const login = (data) => {
    return {
        type: 'LOG_IN',
        data,
    };
};
const logout = () => {
    return {
        type: 'LOG_OUT'
    };
};

const addPost = (data) => {
    return {
        type: 'ADD_POST',
        data,
    }
}

// const changeCompAtoB = {
//     type: 'CHANGE_COMP_A',
//     data: 'b',
// }  
// const changeCompAtoC = {
//     type: 'CHANGE_COMP_A_to_C',
//     data: 'c',
// }


//dispatch
store.dispatch(login({
    id:1,
    name: 'sakong',
    admin: true,
}));
console.log(store.getState());
store.dispatch(addPost({
    userid: 1,
    id: 1,
    content: "test1"
}));
store.dispatch(addPost({
    userid: 1,
    id: 2,
    content: "test2"
}));
store.dispatch(addPost({
    userid: 1,
    id: 3,
    content: "test3"
}));
console.log(store.getState());
store.dispatch(logout());

console.log(store.getState());


//state, action dispatch, reducer