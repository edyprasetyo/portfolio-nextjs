import { configureStore } from '@reduxjs/toolkit'
import contactMeSlice from './contactMe/contactMeSlice'
import visitorSlice from './visitor/visitorSlice'

export default configureStore({
    reducer: {
        visitor: visitorSlice,
        contactMe: contactMeSlice,
    },
})