import { GET_KIND_PRODUCT,GET_MATERIAL_PRODUCT, UP_LOAD_FILE, CREATE_PRODUCT, GET_PRODUCT,
    VIEW_DETAIL_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, GET_KIND_RAITING, GET_NEW_ITEM}  from './types';
import axios from 'axios';

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
// Kind Rainting
export const getKindRaiting=()=> async dispatch=>{
    let res= await axios.get('/api/kindraiting');
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:GET_KIND_RAITING, payload:res.data});
}

//Upload 
export const uploadFile=(file)=> async dispatch =>{
    let res=await axios.post('/api/upload',file
    );
    if(!res) return res.status(400).send('Bad request! Upload faile');
    dispatch({type:UP_LOAD_FILE, payload:res.data})
}
// Product API
// Create Product
export const createProduct= (product)=> async dispatch =>{
    let res =await axios.post('/api/product', product);
    if(!res) return res.status(400).send('Bad Request');
    dispatch ({type:CREATE_PRODUCT, payload:res.data});
}
//getProduct
export const getProduct=()=> async dispatch=>{
    let res= await  axios.get('/api/product');
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:GET_PRODUCT, payload:res.data});
}
// DELETE Product
export const deleteProduct=(_id)=> async dispatch=>{
    let res= await  axios.delete(`/api/product/${_id}`);
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:DELETE_PRODUCT, payload:res.data});
    alert("Delete success");
}
// VỉewDetail Product
export const viewDetailProduct=(id)=> async dispatch=>{
    let res= await  axios.get(`/api/product/${id}`);
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:VIEW_DETAIL_PRODUCT, payload:res.data});
}
// Put Product
export const updateData =(id,product)=> async dispatch=>{
    let res= await axios.put(`/api/product/${id}`,product);
    if(!res) return  res.status(400).send('Bad request! Update faile');
    dispatch({type:UPDATE_PRODUCT,payload:res.data });
}
// get Productnew
export const getProductNew=()=>async dispatch=>{
    let res= await axios.get('/api/product/new');
    if(!res) return res.status(400).send('Bad request ');
    dispatch({type:GET_NEW_ITEM, payload:res.data});
}

// Add tocart
