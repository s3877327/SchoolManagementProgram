import axios from 'axios'

export const createStudent = async (token, data) => await axios.post(`${process.env.REACT_APP_API}/create-student`, data, {
    header: {
        Authorization: `Bearer ${token}`,
    }
})