import api from "./api";

export const adminLogin = (username, password) =>
  api.post("/admin/login", { username, password });

export const addStudent = (student) =>
  api.post("/students", student);

export const getStudents = () =>
  api.get("/students");

export const deleteStudent = (id) =>
  api.delete(`/students/${id}`);

export const addMarks = (marks) =>
  api.post("/marks", marks);

export const getMarks = () =>
  api.get("/marks");
