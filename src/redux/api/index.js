import axios from "axios";

// project api's

const url_project = "http://localhost:5000/projects";

export const fetchProjects = () => axios.get(url_project);
export const createProject = (newProject) =>
  axios.post(`${url_project}`, newProject);

export const fetchProject = (projectName) =>
  axios.get(`${url_project}/${projectName}`);
export const updateProject = (id, updatedProject) =>
  axios.patch(`${url_project}/${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${url_project}/${id}`);

const url_auth = "http://localhost:5000/users";

export const fetchUsers = () => axios.get(url_auth);
export const createUser = (newUser) =>
  axios.post(`${url_auth}/register`, newUser);
export const login = (user) => axios.post(`${url_auth}/login`, user);
export const fetchUser = (id) => axios.get(`${url_auth}/${id}`);
export const updateUser = (id, updatedUser) =>
  axios.patch(`${url_auth}/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${url_auth}/${id}`);

const design__file__auth = "http://localhost:5000/design__file";

export const fetchDesignFiles = () => axios.get(design__file__auth);
export const createDesignFile = (newDesignFile) =>
  axios.post(`${design__file__auth}/register`, newDesignFile);
export const fetchDesignFile = (id) => axios.get(`${design__file__auth}/${id}`);
export const updateDesignFile = (id, updatedDesignFile) =>
  axios.patch(`${design__file__auth}/${id}`, updatedDesignFile);
export const deleteDesignFile = (id) =>
  axios.delete(`${design__file__auth}/${id}`);
