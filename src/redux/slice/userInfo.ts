import { createSlice } from "@reduxjs/toolkit";

interface IUserInfo {
  reservationId: string;
  token?: string;
}

const initialState: IUserInfo = { reservationId: "" };

const formSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => payload,
    resetUser: () => initialState,
  },
});

export const { setUserInfo, resetUser } = formSlice.actions;

export default formSlice.reducer;
