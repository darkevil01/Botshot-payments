import { createSlice } from "@reduxjs/toolkit";

interface IGatewayInfo {
  gatewayDetails: any[];
}

const initialState: IGatewayInfo = {
  gatewayDetails: [],
};

const formSlice = createSlice({
  name: "gatewayInfo",
  initialState,
  reducers: {
    setGatewayDetails: (state, { payload }) => {
      state.gatewayDetails = payload;
    },
    resetGateway: () => initialState,
  },
});

export const { setGatewayDetails, resetGateway } = formSlice.actions;

export default formSlice.reducer;
