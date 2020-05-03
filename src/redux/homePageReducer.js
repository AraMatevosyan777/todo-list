import * as axios from 'axios';

const SET_NOTES_DATA = 'SET_NOTES_DATA';
const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const ON_HIDE_ALERT = 'ON_HIDE_ALERT';
const ON_REMOVE = 'ON_REMOVE';
const ON_WARNING = 'ON_WARNING';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    notes: [],
    alert: {
        boolean: false,
        message: null,
        className: null,
        title: null
    },
    isFetching: false
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
                alert: {
                    ...state.alert,
                    boolean: true,
                    message: 'You added a new note',
                    className: 'newNoteAlert',
                    title: 'Attention'
                }
            }
        case ON_REMOVE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.noteId),
                alert: {
                    ...state.alert,
                    boolean: true,
                    message: 'You deleted a note',
                    className: 'removeNoteAlert',
                    title: 'Attention'
                }
            }
        case ON_WARNING:
            return {
                ...state,
                alert: {
                    ...state.alert,
                    boolean: true,
                    message: 'Enter note',
                    className: 'warning',
                    title: 'Warning'
                }
            }
        case ON_HIDE_ALERT:
            return {
                ...state,
                alert: { ...state.alert, boolean: action.boolean }
            }
        case SET_NOTES_DATA:
            return {
                ...state,
                notes: action.payload
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.boolean
            }
        default:
            return state
    }
}
export default homePageReducer;

const setNotesData = (payload) => ({ type: SET_NOTES_DATA, payload });
const addNewNote = (payload) => ({ type: ADD_NEW_NOTE, payload });
const noteRemove = (noteId) => ({ type: ON_REMOVE, noteId });
export const onWarning = () => ({ type: ON_WARNING });
export const onHideAlert = (boolean) => ({ type: ON_HIDE_ALERT, boolean });
const isFetchingAC = (boolean) => ({ type: IS_FETCHING, boolean });


export const requestNotes = () => async (dispatch) => {
    dispatch(isFetchingAC(true))
    let response = await axios.get('https://to-do-list-3acfa.firebaseio.com/notes.json');
    if (response.data != null) {
        const payload = Object.keys(response.data).map(key => {
            return {
                ...response.data[key],
                id: key
            }
        })
        dispatch(setNotesData(payload));
    }
    dispatch(isFetchingAC(false));
}

export const onAddNewNote = (value) => async (dispatch) =>{
    let newNote = {
        id: Date.now(), 
        title: value,
        date: new Date().toJSON(),
    };
    let response = await axios.post('https://to-do-list-3acfa.firebaseio.com/notes.json',newNote);
        const payload = {
            ...newNote,
            id: response.data.name
        };
        dispatch(addNewNote(payload));
}

export const onNoteRemove = (noteId) => async (dispatch) => {
    axios.delete(`https://to-do-list-3acfa.firebaseio.com/notes/${noteId}.json`).then(response =>{
            if(response.statusText === "OK"){
                dispatch(noteRemove(noteId));
            }
        })
}