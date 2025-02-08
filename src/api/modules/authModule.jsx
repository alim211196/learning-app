import axios from "axios";
import api from "../endpoints";
const apiUrl = import.meta.env.VITE_API_URL;

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${apiUrl}${api.userRegister}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async (token) => {
  try {
    const response = await axios.get(
      `${apiUrl}${api.userVerification}${token}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${apiUrl}${api.userLogin}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (formData) => {
  try {
    const response = await axios.post(
      `${apiUrl}${api.userForgotPass}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (password, id) => {
  try {
    const response = await axios.patch(`${apiUrl}${api.userChangePass}${id}`, {
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAuthUserPassword = async (userId, password) => {
  try {
    const response = await axios.patch(
      `${apiUrl}${api.updateAuthUserPassword}${userId}`,
      {
        password: password,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
