import React from 'react';
import StudentInfo from './StudentInfo';
import AcademicInfo from './AcademicInfo';
import './styling/AddStudent.css';

const AddStudent = () => {
  return (
    <form className="form">
        <StudentInfo />
        <AcademicInfo />
        <input id="submit-button" type="submit" value="Save Details"></input>
    </form>
  )
}

export default AddStudent