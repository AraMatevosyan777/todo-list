import React from 'react';
import './Notes.css';
import './NotesModule.css';
import Note from './Note';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Notes = (props) => {

    let NotsElement = props.notes.map((note, index) =>
        <CSSTransition
            key={note.id}
            classNames={'note'}
            timeout={500}>
            <Note index={index} note={note} onNoteRemove={props.onNoteRemove}/>
        </CSSTransition>)

    return (
        <div>
            <TransitionGroup component='ul'>
                {NotsElement}     
            </TransitionGroup>
        </div>
    )
}

export default Notes;