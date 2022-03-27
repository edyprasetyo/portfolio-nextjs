import { createSlice } from '@reduxjs/toolkit';

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
    fetch('/api/contact-me/submit-form', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then((res) => res.json())
        .then((resData) => {
            dispatch(submitResponse(resData));
        });
}

export const checkCapthaToken = (captcha) => async dispatch => {
    dispatch(showLoading(true));
    fetch('/api/contact-me/check-token', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'captcha': captcha }),
    }).then((res) => res.json())
        .then((data) => {
            dispatch(checkTokenResponse(data));
        });
}


export default contactMeSlice.reducer