import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "./api";

const initialState = {
  data: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getUserDetails.fulfilled, (state, actions) => {

      if (actions.payload) {
        state.data = actions.payload;
        state.isSuccess = true
        state.isError = false;
        state.isLoading = false;
      } else {
        state.isLoading = false;
        state.isError = true;
      }
    });
    builder.addCase(getUserDetails.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }

});

export const { setSkip, setStatus, reset } = userSlice.actions;
export default userSlice.reducer;