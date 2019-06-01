
import { ADD_TO_CART, UPDATE_CART, DELETE_PRODUCT_IN_CART } from './../actions/types';
let data = JSON.parse(localStorage.getItem('CART'));
 
let initState = data ? data : [];

const cartReducer = (state = initState, action) => {
    let {payload,qualitySell}=action;
    let index = -1;
    switch (action.type) {
        case ADD_TO_CART:
            index=findProductInCart(state,payload);
            if(index!==-1){
                state[index].qualitySell+=qualitySell;
            }else{
                state.push({
                    payload,
                    qualitySell
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case DELETE_PRODUCT_IN_CART:
                index = findProductInCart(state, payload);
                if (index !== -1) {
                    state.splice(index, 1);
                }
                localStorage.setItem('CART', JSON.stringify(state));
                return [...state];
         case  UPDATE_CART:
                index = findProductInCart(state, payload);
                if(index !== -1){
                    if(state[index].qualitySell<=payload.qualityProduct){
                        state[index].qualitySell = qualitySell;
                    }else{
                        alert('Đã hết hàng')
                    }
                   
                }
                localStorage.setItem('CART', JSON.stringify(state));
                return [...state];   
        default:
            return state
    }
}
let findProductInCart = (cart, payload) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].payload._id === payload._id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cartReducer
