import {REGISTER_USER, LOGIN_WEB, GET_USERS, DELETE_USER}  from './types';
import axios from 'axios';

// USER ACTIONS
// login
export const loginUser=(user, history)=>async dispatch=>{
    let res= await axios.post('/api/auth',user);
    if(!res) {
        alert('Email hoặc mật khẩu không đúng');
         history.push('/');
         return res.status(400).send('Bad request');
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
// DeleteUser
export const deleteUser=(id)=> async dispatch =>{
    let res = await axios.delete(`/api/register/${id}`);
    if(!res) return res.status(400).send("Bad request");
    dispatch({type:DELETE_USER, payload:res.data});
    alert("Delete success");
}


