import { GET_NEW_ITEM } from './../actions/types';

const initState = {};

const newProductReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_NEW_ITEM:
        return action.payload
        default:
            return state;
    }
};

export default newProductReducer;
