import {NEW_MESSAGE} from './types'



//make initial State 

export const initialState = {messages: []}; //
//this is the reducer pattern from before

const reducer = (state, action) => {
    switch(action.type) {
        case NEW_MESSAGE:
            return {...state, messages:[...state.messages, action.item] };
        default:
            return state;
    }
}

export default reducer;