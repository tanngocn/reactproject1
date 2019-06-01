import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';
import kindProductReducer from './kindproduct';
import materialReducer from './material';
import userReducer from './user';
import uploadReducer from './upload';
import productReducer from './product';
import viewDetailProductReducer from './viewDetail';
import kindRaitingReducer from './kindRaiting';
import chartReducer from './chart';
import reviewListReducer from './ListReview';
import newProductReducer from './newProduct';
import cartReducer from './cart';


const myReducer= new combineReducers({
    loginReducer,
    registerReducer,
    kindProductReducer,
    materialReducer,
    userReducer,
    uploadReducer,
    productReducer,
    viewDetailProductReducer,
    kindRaitingReducer,
    chartReducer,
    reviewListReducer,
    newProductReducer,
    cartReducer
    

})
export default myReducer;
