import React, { useRef, useState } from 'react';



const NumberBasball = () => {
    const [answer, setAnswer] = useState('111');
    const [value, setValue] = useState('222');
    const [result, setResult] = useState('3333');
    const [tries, setTries] = useState([]);
    const inputEl = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(value.length);
        

    };


    return (
        <>
        <input
            ref={inputEl}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
        </input>
            <div>
                {value}
            </div>



        </>
    )
}

export default NumberBasball;