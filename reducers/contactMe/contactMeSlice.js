import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const contactMeSlice = createSlice({
    name: 'contactMe',
    initialState: {
        loading: false,
        submitDisabled: true,
        resToken: {},
        resSubmit: {},
    },
    reducers: {
        showLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSubmitDisabled: (state, action) => {
            state.submitDisabled = action.payload;
        },
        checkTokenResponse: (state, action) => {
            state.resToken = action.payload;
            state.loading = false;
        },
        submitResponse: (state, action) => {
            state.resSubmit = action.payload;
            state.loading = false;
        },
    },
})

export const { showLoading, setSubmitDisabled, checkTokenResponse, submitResponse } = contactMeSlice.actions

export const contactMeData = (state) => state.contactMe

export const submitContactForm = (data) => async dispatch => {
    dispatch(showLoading(true));
    axios.post('/api/contact-me/submit-form', { data })
        .then(function (response) {
            dispatch(submitResponse(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

export const checkCapthaToken = (captcha) => async dispatch => {
    dispatch(showLoading(true));
    axios.post('/api/contact-me/check-token', { 'captcha': captcha })
        .then(function (response) {
            dispatch(checkTokenResponse(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}


export default contactMeSlice.reducer