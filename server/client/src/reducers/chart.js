import {COUNT_RAITING} from './../actions/types';
const initState = {}

const chartReducer = (state = initState, action) => {
    switch (action.type) {
        case COUNT_RAITING:
            return action.payload
        default:
            return state
    }
}

export default chartReducer
