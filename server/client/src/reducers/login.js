import { LOGIN_WEB}  from './../actions/types';
const initState = {
    show:false
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_WEB:
        if(action.payload)
        sessionStorage.setItem('token',JSON.stringify(action.payload)); 
        return action.payload;
        default:
            return state
    }
}

export default loginReducer;
