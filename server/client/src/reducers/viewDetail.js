
import { VIEW_DETAIL_PRODUCT } from './../actions/types';
const initState = {
    nameProduct:"",
    priceProduct:"",
    qualityProduct:"",
    description:"",
    kindProduct:{
        _id:"",
        name:""
    },
    material:{
      _id:"",
      name:""
    },
    imgProduct:null
  }


const viewDetailProductReducer = (state = initState, action) => {
    switch (action.type) {
        case VIEW_DETAIL_PRODUCT:
        return action.payload;
        default:
            return state
    }
}

export default viewDetailProductReducer
