import { createSlice } from '@reduxjs/toolkit';

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
    fetch('/api/visitor/getJumlahPengunjung')
        .then((res) => res.json())
        .then((data) => {
            dispatch(setJumlahPengunjung(data.oUtillog.JumlahPengunjung));
        });
}

export default visitorSlice.reducer