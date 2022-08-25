import React from 'react'
import {Link} from 'react-router-dom'

function EditStudent() {
  return (
    <div clasName="card">
      <div clasName="card-body">
        <h5 clasName="card-title">Add New Student</h5>
        <p clasName="card-text">
          Click to add new student
        </p>
        <Link to='/add-student'><button className="btn btn-primary">Add</button></Link>
      </div>
    </div>
  )
}

export default EditStudent