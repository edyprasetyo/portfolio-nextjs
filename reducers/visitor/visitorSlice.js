import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const visitorSlice = createSlice({
    name: 'visitor',
    initialState: {
        loading: false,
        jumlahPengunjung: 0,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setJumlahPengunjung: (state, action) => {
            state.jumlahPengunjung = action.payload;
            state.loading = false;
        },
    },
})

export const { setLoading, setJumlahPengunjung } = visitorSlice.actions

export const visitorData = (state) => state.visitor

export const fetchJumlahPengunjung = () => async dispatch => {
    dispatch(setLoading(true));
    axios.post('/api/visitor/getJumlahPengunjung', {})
        .then(function (response) {
            dispatch(setJumlahPengunjung(response.data.oUtillog.JumlahPengunjung));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default visitorSlice.reducer