import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../features/navbar'
const store = configureStore( {
    reducer :{

    counter:counterSlice
        },
}) 

export default store