import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
    mobileViewOpen: false
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setMobileViewOpen: (state, action) => {
            state.mobileViewOpen = action.payload
        }
    }
})

export const { setUserData, setMobileViewOpen } = dataSlice.actions

export default dataSlice.reducer
