import React from 'react';
import './Notes.css';

const Note = (props) => {
    return(
        <div className={'note'}>
            <li>
                <div>
                    <h4>{props.note.title}</h4>
                    <p>{props.note.date}</p>
                </div>
                <button onClick={()=> props.onNoteRemove(props.note.id)} className="button button3">&times;</button>
            </li>
        </div>
    )
}

export default Note;