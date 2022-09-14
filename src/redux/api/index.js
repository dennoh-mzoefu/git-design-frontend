import axios from "axios";

const url_auth = "http://localhost:5000/users";

export const fetchUsers = () => axios.get(url_auth);
export const createUser = (newUser) =>
  axios.post(`${url_auth}/register`, newUser);
export const login = (user) =>
  axios.post(`${url_auth}/login`, user);
export const fetchUser = (id) => axios.get(`${url_auth}/${id}`);
export const updateUser = (id, updatedUser) =>
  axios.patch(`${url_auth}/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${url_auth}/${id}`);
