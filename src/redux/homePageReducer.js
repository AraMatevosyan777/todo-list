const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const ON_HIDE_ALERT = 'ON_HIDE_ALERT';
const ON_REMOVE = 'ON_REMOVE';
const ON_TOGGLE = 'ON_TOGGLE';
const ON_WARNING = 'ON_WARNING';

let initialState = {
    notes:[
        {id: 0, title: 'Stay at home', complated: false},
        {id: 1, title: 'Learn React.js', complated: false},
    ],
    alert: {
        boolean: false,
        message: null,
        className: null,
        title: null,
    }
}

const homePageReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_NEW_NOTE:
            let newNote = {
                id: Date.now(), 
                title: action.newNote, 
                complated: false
            }
            return {
                ...state,
                notes: [...state.notes, newNote],
                alert: {
                    ...state.alert, 
                    boolean: true, 
                    message: action.newNote,
                    className: 'newNoteAlert',
                    title: 'You added a new note'}
            }
        case ON_REMOVE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.noteId),
                alert:{
                    ...state.alert,
                    boolean: true,
                    message: null,
                    className: 'removeNoteAlert',
                    title: 'You deleted a note'
                }
            }
        case ON_WARNING:
            return {
                ...state,
                alert:{
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
                alert: {...state.alert,  boolean: action.boolean}
            }
        case ON_TOGGLE:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if(note.id === action.noteId){
                        return{...note, complated: !note.complated}
                    }
                    return note
                })
            }
            default:
                return state
    }
}
export default homePageReducer;

export const addNewNote = (newNote) => ({type:ADD_NEW_NOTE, newNote});
export const onNoteRemove = (noteId) => ({type:ON_REMOVE,noteId});
export const onWarning = () => ({type:ON_WARNING});
export const onHideAlert = (boolean) => ({type:ON_HIDE_ALERT, boolean});
export const onToggle = (noteId) => ({type:ON_TOGGLE, noteId});
