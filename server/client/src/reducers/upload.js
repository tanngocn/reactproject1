import {UP_LOAD_FILE} from './../actions/types';


const initState = {
    imgProduct:""
}

const uploadReducer = (state = initState, action) => {
    switch (action.type) {
        case UP_LOAD_FILE:
        return action.payload;
        default:
            return state
    }
}

export default uploadReducer
