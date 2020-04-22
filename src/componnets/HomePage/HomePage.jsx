import React from 'react';
import Form from '../common/Form';
import Notes from './Notes/Notes';
import Alert from '../common/Alert';

const HomePage = (props) => {
    return(
        <div className='home-page'>
            <Alert alert={props.alert} onHideAlert={props.onHideAlert}/>
            <Form addNewNote={props.addNewNote} onWarning={props.onWarning}/>
            <Notes notes={props.notes} onNoteRemove={props.onNoteRemove} onToggle={props.onToggle}/>
        </div>
    )
}

export default HomePage;