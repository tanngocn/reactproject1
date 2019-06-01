import { CREATE_PRODUCT, GET_PRODUCT,UPDATE_PRODUCT } from './../actions/types';

const initState = {};

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
        return action.payload;
        case GET_PRODUCT:
        return action.payload;
        case UPDATE_PRODUCT:
        return action.payload;
        default:
            return state;
    }
};

export default productReducer;
