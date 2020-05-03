import React from 'react';
import Form from '../common/Form';
import Notes from './Notes/Notes';
import Alert from '../common/Alert';
import Loader from '../common/Loader/Loader';

const HomePage = (props) => {
    return(
        <div>
            <Alert alert={props.alert} onHideAlert={props.onHideAlert}/>
            <Form onAddNewNote={props.onAddNewNote} onWarning={props.onWarning}/>
            {
                props.isFetching ? <Loader/>
                :<Notes notes={props.notes} onNoteRemove={props.onNoteRemove}/>
            }
        </div>
    )
}

export default HomePage;