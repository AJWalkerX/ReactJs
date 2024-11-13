import { configureStore } from "@reduxjs/toolkit";

import {productSlice} from "./feature";

const store = configureStore({
    reducer: {
        // key : value
        product: productSlice
    }
})

export default store