import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import apis from "../../config/RestApis";
import { IRegisterRequest } from "../../models/IRegisterRequest";
import { ILoginRequest } from "../../models/ILoginRequest";
import { IBaseResponse } from "../../models/IBaseResponse";
import swal from "sweetalert";
import { stat } from "fs";
const initialAuthState = {
  isAuth: false, //login oldu mu?
  isLoginLoading: false,
  isRegisterLoading: false,
  user: {},
};

//fetch işlemleri
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (payload: IRegisterRequest) => {
    console.log("payload ", payload);
    const response = await fetch(apis.authService + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (payload: ILoginRequest) => {
    const response = await fetch(apis.authService + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoginLoading = true;
    });
    builder.addCase(
      fetchLogin.fulfilled,
      (state, action: PayloadAction<IBaseResponse<any>>) => {
        state.isLoginLoading = false;
        if (action.payload.code === 200) {
          localStorage.setItem("token", action.payload.data);
          state.isAuth = true;
        } else {
          swal({
            title: "Hata",
            text: action.payload.message,
            icon: "error",
          });
        }
      }
    );
    builder.addCase(fetchRegister.pending, (state) => {
      state.isRegisterLoading = true;
    });
    builder.addCase(
      fetchRegister.fulfilled,
      (state, action: PayloadAction<IBaseResponse<any>>) => {
        state.isRegisterLoading = false;
        if (action.payload.code === 200) {
          swal({
            title: "Başarılı",
            text: "Üyelik işlemi başarı ile tamamlanmıştır",
            icon: "success",
          });
        } else {
          swal({
            title: "Hata",
            text: action.payload.message,
            icon: "error",
          });
        }
      }
    );
  },
});

export default authSlice.reducer;
