import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: {},
    error: null,
    message: null,
  },
  reducers: {
    // A consolidated way to handle request states
    requestStarted(state) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
      state.message = null;
    },
    success(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.error = null;
      state.message = action.payload.message;
    },
    failed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
      state.message = null;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
    // The reducer now handles failed logout attempts properly
    logoutFailed(state, action) {
      state.error = action.payload;
    },
    // Simplified reducer for clearing errors
    clearAllErrors(state) {
      state.error = null;
      state.message = null;
    },
    // Add this function for backward compatibility
    clearAllUserErrors(state) {
      state.error = null;
      state.message = null;
    },
  },
});

export const { requestStarted, success, failed, logoutSuccess, logoutFailed, clearAllErrors, clearAllUserErrors } = userSlice.actions;

export const register = (data) => async (dispatch) => {
  dispatch(requestStarted());
  try {
    const response = await axios.post(
      API_ENDPOINTS.USER_REGISTER,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(success(response.data));
    dispatch(clearAllErrors());
  } catch (error) {
    dispatch(failed(error.response.data.message));
  }
};

export const login = (data) => async (dispatch) => {
  dispatch(requestStarted());
  try {
    const response = await axios.post(
      API_ENDPOINTS.USER_LOGIN,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(success(response.data));
    dispatch(clearAllErrors());
  } catch (error) {
    dispatch(failed(error.response.data.message));
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(requestStarted());
  try {
    const response = await axios.get(
      API_ENDPOINTS.USER_GET,
      {
        withCredentials: true,
      }
    );
    // Fix: Pass the user data in the correct format
    dispatch(success({ user: response.data.user, message: "User fetched successfully" }));
    dispatch(clearAllErrors());
  } catch (error) {
    dispatch(failed(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(
      API_ENDPOINTS.USER_LOGOUT,
      {
        withCredentials: true,
      }
    );
    dispatch(logoutSuccess());
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
    // Force page reload to clear all state and redirect to home
    window.location.href = '/';
  } catch (error) {
    dispatch(logoutFailed(error.response.data.message));
  }
};

export default userSlice.reducer;