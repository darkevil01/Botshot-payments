import { createSlice } from "@reduxjs/toolkit";

interface IGatewayInfo {
  gatewayDetails: any[];
}

const initialState: IGatewayInfo = {
  gatewayDetails: [],
};

const gatewaySlice = createSlice({
  name: "gatewayInfo",
  initialState,
  reducers: {
    setGatewayDetails: (state, { payload }) => {
      state.gatewayDetails = payload;
    },
    resetGateway: () => initialState,
  },
});

export const { setGatewayDetails, resetGateway } = gatewaySlice.actions;

export default gatewaySlice.reducer;
