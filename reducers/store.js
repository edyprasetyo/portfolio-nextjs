import { configureStore } from '@reduxjs/toolkit'
import visitorSlice from './visitor/visitorSlice'

export default configureStore({
    reducer: {
        visitor: visitorSlice,
    },
})