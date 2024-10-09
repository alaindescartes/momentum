import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: null,
    role: null,
    username: null,
    email: null,
  },
  isAuthenticated: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      if (!state.user) {
        state.user = {
          id: null,
          role: null,
          username: null,
          email: null,
        };
      }
      state.user.id = action.payload._id;
      state.user.username = action.payload.username;
      state.user.role = action.payload.role;
      state.user.email = action.payload.email;
    },

    updateAuthState: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    updateLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },

    resetState: state => {
      state.user = {
        id: null,
        role: null,
        username: null,
        email: null,
      };

      state.isAuthenticated = false;
    },
  },
});

export const {
  updateAuthState,
  updateLoadingState,
  updateUserState,
  resetState,
} = userSlice.actions;

export default userSlice.reducer;
