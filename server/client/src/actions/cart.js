import {ADD_TO_CART,UPDATE_CART,DELETE_PRODUCT_IN_CART} from './types';
import axios from 'axios';
export const addToCart = (id, qualitySell) => async dispatch=> {
    let res= await axios.get(`/api/product/cart/${id}`);
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:ADD_TO_CART,payload:res.data,qualitySell})
}
export const onUpdateToCart = (id, qualitySell)=> async dispatch=>{
    let res= await axios.get(`/api/product/cart/${id}`);
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:UPDATE_CART, payload:res.data, qualitySell})
}
export const onDeleteToCart = (id)=> async dispatch=>{
    let res= await axios.get(`/api/product/cart/${id}`);
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:DELETE_PRODUCT_IN_CART, payload:res.data})
}