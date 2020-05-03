import React from 'react';
import HomePage from './HomePage';
import {connect} from 'react-redux';
import {onHideAlert,onAddNewNote,onNoteRemove,onWarning,requestNotes} from '../../redux/homePageReducer';

class HomePageContainer extends React.Component {

    componentDidMount(){this.props.requestNotes();};

    render() {
        return (
            <div>
                <HomePage   notes={this.props.notes}
                            alert={this.props.alert}
                            onHideAlert={this.props.onHideAlert}
                            onAddNewNote={this.props.onAddNewNote}
                            onNoteRemove={this.props.onNoteRemove}
                            onWarning={this.props.onWarning}
                            isFetching={this.props.isFetching}
                 />
            </div>
        )
    }
}

const mapSTP = (state) => ({
    notes: state.homePage.notes,
    alert: state.homePage.alert,
    isFetching: state.homePage.isFetching,
})

export default connect(mapSTP,{onHideAlert,onAddNewNote,onNoteRemove, onWarning,requestNotes})(HomePageContainer);