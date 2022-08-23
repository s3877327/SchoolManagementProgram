import React from 'react'
import EditStudent from './EditStudent'
import ViewStudent from './ViewStudent'


function TeacherManage() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col border border-dark p-3 m-3"><ViewStudent /></div>
      </div>
      <div class="row">
        <div class="col border border-dark p-3 m-3"><EditStudent /></div>
      </div>
    </div>
  )
}

export default TeacherManage