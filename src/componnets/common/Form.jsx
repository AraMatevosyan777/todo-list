import React, { useState } from 'react';
import './common.css';

const Form = (props) => {
    let [value, setValue] = useState('');
    const addNote = (e) => {
        e.preventDefault()
        if(value.trim()){
            props.addNewNote(value);
            setValue(''); 
        }else{
            props.onWarning()
        }
    }
    return (
        <div>
            <form onSubmit={addNote}>
                <input onChange={(e)=> setValue(e.currentTarget.value)} 
                value={value}className="noteInput" type="text" placeholder='Title...'/>
            </form>
        </div>
    )
}

export default Form;