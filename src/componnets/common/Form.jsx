import React, { useState } from 'react';
import './common.css';
import './commonModule.css';

const Form = (props) => {
    let [value, setValue] = useState('');
    const addNote = (e) => {
        e.preventDefault()
        if(value.trim()){
            props.onAddNewNote(value);
            setValue(''); 
        }else{
            props.onWarning()
        }
    }
    return (
        <form className='form' onSubmit={addNote}>
            <input onChange={(e)=> setValue(e.currentTarget.value)} 
            value={value} className="formInput" type="text" placeholder={'Title...'}/>
        </form>
    )
}

export default Form;