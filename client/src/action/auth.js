import axios from "axios";
import { toast } from "react-toastify";

export const register =  (userdata, navigate) => async dispatch => {
  try {
      await axios.post(`${process.env.REACT_APP_API}/register`, userdata)
        const res = await register({
          name: userdata.name,
          email: userdata.email,
          password: userdata.password,
        });
        console.log("REGISTER Teacher ===> ", res);
        //create popup for successful login
        toast.success("Register successfully. Back to Login page in 5 second", {
          autoClose: 3000,
        });
        //redirect to login page in 3s
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          //create popup for error
          toast.error(error.response.data);
        }
      }
}


export const login = (userdata, navigate) => async dispatch => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}/login`, userdata)
        
        console.log(
          "SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===> ",
          
        );
        //save user to local storage
        localStorage.setItem("auth", JSON.stringify(res.data));
        //save to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        navigate("/");
      } catch (e) {
        if (e.response.status === 400) {
          toast.error(e.response.data);
        }
      }
}

