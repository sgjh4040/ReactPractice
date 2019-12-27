import React, {useState,useEffect,useReducer,useCallback} from 'react';
import Table from './Table'
import useInput from './hooks/useInput';
const TicTacToe = () =>{
    const [name,setName] = useState('');
    const [value,setValue] = useState('');
    const hookInput  = useInput('');

    const initialState = {
        winner: '',
        turn:'0'
    }

    const reducer = (state,action)=>{
        switch (action.type){
            case 'SET_WINNER':
                return{
                    ...state,
                    winner: action.winner,
                }
        }

    };

    const [state,dispatch] = useReducer(reducer,initialState);

    const onClickTable = useCallback(()=>{
        console.log('click');
        dispatch({type:'SET_WINNER',winner:'0'});
    },[]);

    const onclickRedo = () =>{
        console.log("click");
        setName('사공');
    }
    const named = (e)=>{
        console.log(e.target.value);
        setValue(e.target.value);
    }

    

    return (
        <>
        <Table onClick={onClickTable}/>
        {state.winner && <div>{state.winner}</div>}


        {/* <button onClick={onclickRedo}>클릭</button>
        <div>{name}</div>
        <br/>
        <br/>
        <input onChange={named}></input>
        <div>{value}</div>
        <br/>
        <br/>
        <input onChange={hookInput.onChange} value={hookInput.value}></input> */}
        {/* 위와 동일 */}
        {/* <input {...hookInput}/>
        <div>{hookInput.value}</div> */}
    

        </>
    )

}

export default TicTacToe;