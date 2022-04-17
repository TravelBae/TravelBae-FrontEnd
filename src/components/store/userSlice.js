import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {
      role_id: "",
      username: "",
      isLogin: false,
    },
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.data.isLogin = true;
    },
  },
});

export const { setData } = userSlice.actions;
export default userSlice;