import {GET_USERS}  from './../actions/types';
const initState = {}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
        return action.payload;
        default:
            return state
    }
}

export default userReducer
