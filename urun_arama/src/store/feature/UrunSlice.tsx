import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface IProductState {
    productList: IProduct[];
    isProductListLoading: boolean;
    searchList: IProduct[]
    isSearchListLoading: boolean,
    isSearchRejected: boolean
}
const inialProductState: IProductState= {
    productList: [],
    isProductListLoading: false,
    searchList: [],
    isSearchListLoading: false,
    isSearchRejected: false
}

export const fetchGetAllProduct = createAsyncThunk(
    'product/fetchGetAllProduct',
    async  () => {
        return (await 
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => data)
        )
    }
)

export const fetchSearchProduct = createAsyncThunk(
    'product/fetchSearchProduct',
    async  (search: string) => {
        return await 
        fetch('https://dummyjson.com/products/search?q='+ search)
            .then(res => res.json())
            .then(data => data)
        
    }
)

const UrunSlice = createSlice({
    name: "product",
    initialState: inialProductState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetAllProduct.pending, (state) => {
                state.isProductListLoading = true;
            })
            .addCase(fetchGetAllProduct.fulfilled, (state, action) => {
                state.isProductListLoading = false;
                state.productList = action.payload.products;
            })
            .addCase(fetchGetAllProduct.rejected, (state) => {
                state.isProductListLoading = false;
            })
            .addCase(fetchSearchProduct.fulfilled, (state, action) => {
                state.searchList = action.payload.products;
                state.isSearchListLoading = false;
                state.isSearchRejected = false;
            })
            .addCase(fetchSearchProduct.pending, (state) => {
                state.isSearchListLoading = true;                
            })
            .addCase(fetchSearchProduct.rejected, (state) => {
                state.isSearchListLoading = false;
                state.isSearchRejected = true;
            });
    },
});

export default UrunSlice.reducer