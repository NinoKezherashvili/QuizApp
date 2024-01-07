import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://crudapi.co.uk/api/v1/users/";
const apikey = "xqV72-moMK_a_u_QJTHyybjqNfiMlQpZaoyCWPP_St1hs-a3Lw";

const headers = { Authorization: `Bearer ${apikey}` };

export const loginUser = createAsyncThunk("user/loginUser", async (cred) => {
  const request = await axios.get(`${apiUrl}${cred}`, { headers });
  const response = await request.data;
  localStorage.setItem("user", JSON.stringify(response));
  return response;
});

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.error = "Username or password is incorrect";
      });
  },
});

export default userSlice.reducer;
