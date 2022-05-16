import { configureStore } from '@reduxjs/toolkit'
import contactMeSlice from './contactMe/contactMeSlice'
import navbarSlice from './navbar/navbarSlice'
import visitorSlice from './visitor/visitorSlice'

export default configureStore({
    reducer: {
        visitor: visitorSlice,
        contactMe: contactMeSlice,
        navbar: navbarSlice,
    },
})