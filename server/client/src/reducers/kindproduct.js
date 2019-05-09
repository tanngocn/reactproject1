
import {GET_KIND_PRODUCT} from './../actions/types';
const initState = {};
const kindProductReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_KIND_PRODUCT:
        return action.payload;
        default:
            return state
    }
}

export default kindProductReducer;
