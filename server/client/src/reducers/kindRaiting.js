import {GET_KIND_RAITING} from './../actions/types';

const initState = {}

const kindRaitingReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_KIND_RAITING:
            return action.payload
        default:
            return state
    }
}

export default kindRaitingReducer
