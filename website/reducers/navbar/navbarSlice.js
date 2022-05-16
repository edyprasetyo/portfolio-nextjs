import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        isExpanded: false
    },
    reducers: {
        setExpanded: (state, action) => {
            state.isExpanded = action.payload;
        },
    },
})

export const { setExpanded } = navbarSlice.actions

export const navbarData = (state) => state.navbar

export default navbarSlice.reducer