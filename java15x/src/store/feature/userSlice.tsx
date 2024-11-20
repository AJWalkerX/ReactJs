import { createSlice } from "@reduxjs/toolkit";
import SearchInput from "../../components/atoms/SearchInput";

const initialUserState = {
  profile: {},
  searchUsers: [],
  followerList: [],
  followingList: [],
  isProfileLoading: false,
  isSeachLoading: false,
  isFollowerLoading: false,
  isFollowingLoading: false,
};

//fech işlemleri
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
