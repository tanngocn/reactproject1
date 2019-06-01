
import {GET_REVIEW, SEND_REVIEW_USER} from './../actions/types';
const initState = {
};

const reviewListReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_REVIEW:
            return action.payload;
        case SEND_REVIEW_USER:
            return action.payload;
        default:
            return state;
    }
};

export default reviewListReducer;
