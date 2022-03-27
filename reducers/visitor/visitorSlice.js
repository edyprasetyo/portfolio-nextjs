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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const visitorData = (state) => state.visitor

export const fetchJumlahPengunjung = () => async dispatch => {
    dispatch(setLoading(true));
    fetch('/api/layout/footer')
        .then((res) => res.json())
        .then((data) => {
            dispatch(setJumlahPengunjung(data.oUtillog.JumlahPengunjung));
        });
}

export default visitorSlice.reducer