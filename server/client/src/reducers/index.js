import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';
import kindProductReducer from './kindproduct';
import materialReducer from './material';
import userReducer from './user';
import uploadReducer from './upload';
import productReducer from './product';


const myReducer= new combineReducers({
    loginReducer,
    registerReducer,
    kindProductReducer,
    materialReducer,
    userReducer,
    uploadReducer,
    productReducer
    

})
export default myReducer;
