
import {GET_MATERIAL_PRODUCT} from './../actions/types';
const initState = {
}

const materialReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_MATERIAL_PRODUCT:
        return action.payload;
        default:
            return state
    }
}

export default materialReducer
