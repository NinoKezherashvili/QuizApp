import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./createData.thunk";

const initialState = {
  loading: false,
  error: null,
  singupData: [],
};

const singupSlice = createSlice({
  name: "singup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.error = null;
      state.loading = "LOADING . . . ";
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.singupData = action.payload;
    });
    builder.addCase(fetchUserData.rejected);
  },
});

export default singupSlice.reducer;


