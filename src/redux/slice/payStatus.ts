import { createSlice } from "@reduxjs/toolkit";

interface IStatus {
  status: boolean;
}

const initialState: IStatus = {
  status: false,
};

const payStatusSlice = createSlice({
  name: "payStatus",
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    resetStatus: () => initialState,
  },
});

export const { setStatus, resetStatus } = payStatusSlice.actions;

export default payStatusSlice.reducer;
