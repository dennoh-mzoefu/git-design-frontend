import {
  ERROR,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_USER,
  CREATE,
  LOGIN,
} from "../actions/types";

const initialState = {
  error: "False",
  user: "",
  auth: false,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      console.log(payload);
      return { ...state, error: payload };
    case CREATE:
      console.log(payload);
      return { ...state, user: payload };
    case FETCH_USER:
      console.log(payload);
      return { ...state, user: payload };
    case LOGIN:
      console.log(payload);
      return { ...state, user: payload };
    case UPDATE:
      console.log(payload);
      return { ...state, user: payload };
    case DELETE:
      console.log(payload);
      return { ...state, user: payload };

    default:
      return state;
  }
};
