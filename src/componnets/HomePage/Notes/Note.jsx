import React from 'react';
import './Notes.css';
import {CSSTransition} from 'react-transition-group';

const Note = (props) => {
    return(
        <div className={'note'}>
            <li className={props.note.complated && 'complated'}>
                <div>
                    <input checked={props.note.complated}  onChange={()=> props.onToggle(props.note.id)} type="checkbox"/>
                    <strong>{props.index + 1})&nbsp;{props.note.title}</strong>
                    <small>{new Date().toLocaleDateString()}</small>
                </div>
                <button onClick={()=> props.onNoteRemove(props.note.id)} className="button button3">&times;</button>
            </li>
        </div>
    )
}

export default Note;