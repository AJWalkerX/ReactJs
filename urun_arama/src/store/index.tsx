import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./feature";

const store = configureStore({
    reducer: {
        product: ProductSlice
    }
})

export default store;