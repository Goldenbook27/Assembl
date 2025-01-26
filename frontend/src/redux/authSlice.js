import { createSlice } from "@reduxjs/toolkit";

// Initial state of the auth
const initialState = {
  user: null,
  userId: null,
  email: null,
  status: "idle", // Can be 'idle', 'loading', 'succeeded', or 'failed'
  error: null, // Stores error messages if any
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // On successful login, store the user data
    login: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    },
    // Log out user
    logout: (state) => {
      state.user = null;
      state.email = null;
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
