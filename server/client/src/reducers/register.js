import {REGISTER_USER,DELETE_USER}  from './../actions/types';
const initState = {}

const registerReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_USER:
        return action.payload;
        case DELETE_USER:
        return action.payload;
        default:
            return state
    }
}

export default registerReducer
