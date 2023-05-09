
import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./features/products/productSlice"

const store = configureStore({
    reducer:{
        products:productSlice.reducer
    }
})

export type storeState = ReturnType<typeof store.getState> 
export type storeDispatch = typeof store.dispatch
export default store