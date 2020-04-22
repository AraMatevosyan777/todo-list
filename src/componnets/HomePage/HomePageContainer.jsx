import React from 'react';
import HomePage from './HomePage';
import {connect} from 'react-redux';
import {onHideAlert,addNewNote,onNoteRemove,onWarning,onToggle} from '../../redux/homePageReducer';

class HomePageContainer extends React.Component {

    onNoteRemove = (userId) => {
        this.props.onNoteRemove(userId);
    }
    addNewNote = (value) => {
        this.props.addNewNote(value);
    }
    onWarning = (value) => {
        this.props.addNewNote(value);
    }

    render() {
        return (
            <div>
                <HomePage notes={this.props.notes}
                            alert={this.props.alert}
                            onHideAlert={this.props.onHideAlert}
                            addNewNote={this.addNewNote}
                            onNoteRemove={this.onNoteRemove}
                            onWarning={this.props.onWarning}
                            onToggle={this.props.onToggle}

                 />
            </div>
        )
    }
}

const mapSTP = (state) => ({
    notes: state.homePage.notes,
    alert: state.homePage.alert
})

export default connect(mapSTP,{onHideAlert,addNewNote,onNoteRemove, onWarning,onToggle})(HomePageContainer);