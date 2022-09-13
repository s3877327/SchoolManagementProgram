import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import TeacherAccountForm from "../forms/TeacherAccountForm";
import { readTeacher, updateTeacher } from "../../action/auth";

const TeacherAccount = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;
  const {token} = auth;
    // console.log(token);

  const [values, setValues] = useState({
    name: user?.name,
    email: user?.email,
    // password: user?.password,
  });

  const {teacherId} = useParams();

  console.log(teacherId);

  const { name, email } = values;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loadTeacherData = async () => {
    let res = await readTeacher(teacherId, token);
    setValues({...values, ...res.data});
  };

  useEffect(() => {
    loadTeacherData();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let teacherData = new FormData();
    teacherData.append("name", name);
    // teacherData.append("email", email);

    try {
      let res = await updateTeacher(token, teacherData, teacherId)
      console.log("Teacher Updated", res)
      toast.success(`Account is updated`)
      setTimeout(() => {
        navigate(`/update-teacher/${teacherId}`)
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    console.log(values)
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>My Account</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <TeacherAccountForm
              handleSubmit={handleSubmit}
              values={values}
              setValues={setValues}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeacherAccount;
