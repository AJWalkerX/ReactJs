/**
 * Burada globbal olarak tutacağımız dataları tanımlıyoruz.
 * Tanımlanan datalar state içersinde burada barındırılıyor.
 * Ayrıca fetch işlemlerini daha düzenli  ve organize olarak burada kontrol edeceğiz.
 * Slice tasarlamak için 3 işlem adımı gereklidir.
 * 1- İhtiyaç duyulan state listesini hazırlarız gerekli oldukça ekleme yapılır.
 * 2- opsiyonel olmakla birlikte, bir sayfayı sadece state olarak yönetmek
 * için kullanılacak ise bu adıom atlanır. Ancak daha sonra ekleme yapılabilir.
 * fetch işlemleri için kullanıcak fonksiyonları burada tanımlarız.
 * 3- state'lerin durumlarını kontrol etmek için kullanılan yapıyı burada kodluyoruz
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// 1-state'ler tanımlanır
const initialStateProduct = {
    productList: [],
    isLoading: false,
    product: {},
    isProductLoading: false,
    findProduct: {},
    isFindProductLoading: false,
}
// 2. fetch işlemleri
/**
 * AsyncThunk kullanımı
 * 1. name: her fetch işlemi için oluşturlacak asyncThunk özel bir isme sahip olmalıdır. Aynı isimler var ise hata verecektir.
 * 2. action: fetch işlemini gerçekleştirip data döneceğimiz bir method yazıyoruz.
 * DİKKAT! action işlemi asenkron bir işlemdir. Çünkü arka planda 
 * başka bir thread'de çalışır ve işlem bitişinde bilgilerini döner.
 */
export const fetchGetAllProduct = createAsyncThunk(
    "product/fetchGetAllProduct", 
    async () => {
        console.log("fetchGetAllProduct");
        return await fetch('https://dummyjson.com/products')
        .then(data => data.json())
        }
)

// 3. State'lerin yönetilmesi

/**
 * createSlice'in oluşturulması
 * 1. name: burada slice'a bir ad verilir. Bu ad uygulama içinde çağrımı yapılacak addır.
 * 2. initialState: bu da yukarıda oluşturulan 1.madde default değerleri bu sclice içerisine aktarılır. Çünkü, durumların değiştiğinden haberdar olmak için ilk değerlerine ihtiyaç vardır.
 * 3. reducers: state içerisinde aktarılan değerlerin değiştirilmesi için kullanılır. 
 * 4. extraReducers: fetch işlemlerinin durumlarını kontrol ederek, initialState üzerinde değişiklik yapmak için kullanılır.
 */

const productSlice = createSlice({
    name: "product",
    initialState: initialStateProduct,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetAllProduct.pending, (state) => {
            // eğer fetch işlemi devam ediyor ise durumu true yapacak.
            state.isLoading = true;
        });
        builder.addCase(fetchGetAllProduct.fulfilled, (state, action) => {
            // fetch işlemi tamamlandı
            state.isLoading = false;
            state.productList = action.payload.products;
        });
        builder.addCase(fetchGetAllProduct.rejected, (state) => {
            // fetch işlemi hatalı bir şekilde sonlanır ise burası çalışır
            state.isLoading = false;
        });
    }
})

export default productSlice.reducer;