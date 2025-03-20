import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState = { value: 0 }; // Declaring initialState outside

const navbarSlice =createSlice ({
name:"counter",
initialState,
reducers:{
    increment: (state)=>{state.value+=1},
    decrement: (state)=>{state.value-=1},
    incbyamount: (state,action)=>{state.value+=action.payload},


}

}) 

export const{increment,decrement,incbyamount}=navbarSlice.actions

export default navbarSlice.reducer