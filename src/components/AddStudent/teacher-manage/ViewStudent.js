import React from "react";
import {Link} from 'react-router-dom'

function ViewStudent() {
  return (
    <div clasName="card">
      <div clasName="card-body">
        <h5 clasName="card-title">View Student</h5>
        <p clasName="card-text">
          Click to view student details
        </p>
        <Link to='/student-profile'><button className="btn btn-primary">View</button></Link>
      </div>
    </div>
  );
}

export default ViewStudent;
