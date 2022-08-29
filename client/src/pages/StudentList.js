import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import { allStudents } from "../action/student";

function StudentList() {
  const [student, setStudent] = useState([]);
  const [query, setQuery] = useState(""); 
  console.log(query);
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    let res = await allStudents(auth.token);
    setStudent(res.data);
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary h-1 p-5 text-center">
        <h1>Student List</h1>
      </div>

      <div className="container-fluid m-3">
        <div className="row justify-content-start m-1">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={(e)=>setQuery(e.target.value)}
              />
              
              {student.filter(h=>h.studentName.toLowerCase().includes(query)).map((h)=>(
                <div className="container-fluid">
                  <br />
                  <StudentCard key={h._id} h={h}/>
                </div>
              ))}
              
              {/* <button className="btn btn-primary" type="button">
                Search
              </button> */}
            </div>
          
        </div>
      </div>
      
    </Fragment>
  );
}

export default StudentList;
