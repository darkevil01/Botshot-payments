import { createSlice } from "@reduxjs/toolkit";

interface IUserInfo {
  reservationId: string;
  token?: string;
}

const initialState: IUserInfo = { reservationId: "" };

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => payload,
    resetUser: () => initialState,
  },
});

export const { setUserInfo, resetUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
