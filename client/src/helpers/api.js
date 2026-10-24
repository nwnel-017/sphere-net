export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export const authHeaders = () => ({
  headers: { accessToken: localStorage.getItem("accessToken") },
});
