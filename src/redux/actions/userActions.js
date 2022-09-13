import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_USER, ERROR } from "./types";

import * as api from "../api/index.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    console.log(error.message);
  }
};
export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUser(id);

    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    console.log(error);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
    console.log(error.message);
  }
};

export const error = (error) => async (dispatch) => {
  dispatch({ type: ERROR, payload: error });
  console.log({ error });
};
