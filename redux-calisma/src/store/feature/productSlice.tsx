import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../models/IProduct";

interface IProductState {
    productList: IProduct[];
    isProductListLoading: boolean;
    sepetListesi: IProduct[]
}
const initialProductState: IProductState = {
    productList: [],
    isProductListLoading: false,
    sepetListesi:[]
}

export const fetchGetAllProducts = createAsyncThunk(
    "product/fetchGetAllProducts", 
    async () => {
        return await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => data);
    })

const productSlice = createSlice({
    name: "product",
    initialState: initialProductState,
    //state içerisindeki değerleri değiştirmek için kullanılan methodlar yazılır.
    reducers: {
        addSepetList(state, action){
            state.sepetListesi.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetAllProducts.pending, (state) => {
            state.isProductListLoading = true;
        });
        builder.addCase(fetchGetAllProducts.fulfilled, (state, action) => {
            state.isProductListLoading = false;
            state.productList = action.payload.products;
        });
        builder.addCase(fetchGetAllProducts.rejected, (state) => {
            state.isProductListLoading = false;
        });
    }
})

export const { addSepetList } = productSlice.actions;
export default productSlice.reducer;