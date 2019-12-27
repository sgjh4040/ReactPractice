import React from 'react';
import Tr from './tr'

const Table = ({onClick}) =>{
    return (
        <table onClick={onClick}>
        <Tr/>
        <Tr/>
        <Tr/>
        </table>
    )
}

export default Table;