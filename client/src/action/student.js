import axios from "axios";

export const createStudent = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-student`, data, {
    header: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allStudents = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/students`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  export const deleteStudent = async (token, studentId) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete-student/${studentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
