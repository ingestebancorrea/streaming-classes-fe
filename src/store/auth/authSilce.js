import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({ 
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        id: null,
        username: null,
        name: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated',
            state.id = payload.id,
            state.username = payload.username,
            state.name = payload.displayName,
            state.photoURL = payload.photoURL,
            state.errorMessage = null
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated',
            state.id = null,
            state.username = null,
            state.name = null,
            state.photoURL = null,
            state.errorMessage = payload?.errorMessage
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;