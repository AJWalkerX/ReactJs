import { configureStore } from "@reduxjs/toolkit";
import { UrunSlice } from "./feature";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        product: UrunSlice
    }
})

export type productDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>()
export default store;