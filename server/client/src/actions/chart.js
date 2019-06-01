import {COUNT_RAITING, GET_REVIEW, SEND_REVIEW_USER}  from './types';
import axios from 'axios';
// count raiting
export const getCountRaiting=()=> async dispatch=>{
    let res= await axios.get('/api/review/count');
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:COUNT_RAITING, payload:res.data});
}
//Display Review
export const getReviewList=()=> async dispatch=>{
    let res=await axios.get(`/api/review`);
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:GET_REVIEW, payload:res.data})
}
// send Review
export const sendReivewUser=(review)=> async dispatch=>{
    let res= await axios.post('/api/review', review);
    if(!res) return res.status(400).send('Bad request');
    dispatch({type:SEND_REVIEW_USER, payload: res.data})
}