import {
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
} from './actions.js';

export function comments(state = [], action) {
    switch(action.type) {
         case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments];
    
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        case EDIT_COMMENT:
            return state.map((comment) => action.id === comment.id ? { ...comment, text: action.text } : comment);

        case THUMB_UP_COMMENT:
            return state.map((comment) => action.id === comment.id ? { ...comment, votes: action.fingerUp } : comment);

        case THUMB_DOWN_COMMENT:
            return state.map((comment) => action.id === comment.id ? { ...comment, votes: action.fingerDown } : comment);
        default:
            return state;
    }
}