import { configureStore } from "@reduxjs/toolkit";
import { SelectSlice } from "./feature";
import { useSelector } from "react-redux";


const store = configureStore({
    reducer: {
        select : SelectSlice,
    },
});
export type ozellikDispatch = typeof store.dispatch;
export type ozellikState = ReturnType<typeof store.getState>;

export const useAppSelector = useSelector.withTypes<ozellikState>();

export default store;