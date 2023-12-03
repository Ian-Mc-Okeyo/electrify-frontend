import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
    mobileViewOpen: false,
    mtrNumber: '',
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setMtrNumber: (state, action) => {
            state.mtrNumber = action.payload
        },
        setMobileViewOpen: (state, action) => {
            state.mobileViewOpen = action.payload
        }
    }
})

export const { setUserData, setMobileViewOpen, setMtrNumber } = dataSlice.actions

export default dataSlice.reducer
