import {REGISTER_USER, LOGIN_WEB, GET_KIND_PRODUCT,GET_MATERIAL_PRODUCT, GET_USERS, UP_LOAD_FILE, CREATE_PRODUCT, GET_PRODUCT}  from './types';
import axios from 'axios';

// USER ACTIONS
// login
export const loginUser=(user, history)=>async dispatch=>{
    let res= await axios.post('/api/auth',user);
    if(!res) {
        history.push('/');
        return res.status(400).send('Bad request')
        };
    dispatch({type: LOGIN_WEB, payload: res.data});
    history.push('/homeContainer');
    return alert('Login success');
}
// Rigister
export const registerUser=(user)=>async dispatch=>{
   
        const res= await axios.post('/api/register',user);
        if(!res) return res.status(400).send('Bad request! Create faile');
        dispatch({type: REGISTER_USER, payload: res.data});
}
//User
//Get user
export const getUser=()=> async dispatch =>{
    let res= await axios.get('/api/register');
    if(!res) return res.status(400).send('Bad request! Don\'t get any User ');
    dispatch({type:GET_USERS, payload:res.data})
}




// KiND PRODUCT ACTIONS
export const getKindProduct=()=> async dispatch=>{
    let res= await axios.get('/api/kindproduct');
    if(!res) return res.status(400).send('Bad request');
    dispatch({type: GET_KIND_PRODUCT, payload: res.data})
}


// Material Product actions
export const getMaterail=()=> async dispatch =>{
    let res= await axios.get('/api/material');
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:GET_MATERIAL_PRODUCT,payload:res.data});
}


//Upload 
export const uploadFile=(file)=> async dispatch =>{
    let res=await axios.post('/api/upload',file
    );
    if(!res) return res.status(400).send('Bad request! Upload faile');
    dispatch({type:UP_LOAD_FILE, payload:res.data})
}
// Create Product
export const createProduct= (product, history)=> async dispatch =>{
    let res =await axios.post('/api/product', product);
    if(!res) return res.status(400).send('Bad Request');
    dispatch ({type:CREATE_PRODUCT, payload:res.data});
    history.push('/homeContainer/admin/listproducts')

}//getProduct
export const getProduct=()=> async dispatch=>{
    let res= await  axios.get('/api/product');
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:GET_PRODUCT, payload:res.data});
}