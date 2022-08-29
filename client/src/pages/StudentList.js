import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import  StudentCard from '../components/StudentCard'
import {allStudents} from '../action/student'

function StudentList() {
const [student, setStudent] =useState([]);
const {auth} = useSelector((state)=>({...state}));
const{token} = auth;

useEffect(()=>{
  loadStudents()
},[]);

const loadStudents = async()=>{
  let res = await allStudents(auth.token);
  setStudent(res.data);
}

  return (
    <Fragment>
      <div className="container-fluid bg-secondary h-1 p-5 text-center">
        <h1>Student List</h1>
      </div>

      <div className="container-fluid m-3">
        <div className="row justify-content-end m-5">
          <div className="col-md-3">
            <div className="input-group">
              <input type="text" className="form-control" />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </div>
          </div>
        
        </div>
      </div>
      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(student, null, 4)}</pre> */}
        {student.length > 0 &&
          student.map((h) => (
            <StudentCard key={h._id} h={h} />
          ))}
      </div>
    </Fragment>
  );
}

export default StudentList;
