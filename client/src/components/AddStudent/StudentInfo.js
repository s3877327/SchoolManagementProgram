import React from 'react'

const StudentInfo = () => {
  return (
    <>
    <h2 className="form-title">Student Details</h2>
    <div className="name_container">
      <div className="first_name">
        <label for='fname'>First name</label>
        <input type="text" id="fname" name="fname" placeholder="First name"></input>
      </div>
      <div className="mid_name">
        <label for="mname">Middle name</label>
        <input type="text" id="mname" name="mname" placeholder='Middle name'></input>
      </div>
      <div className='last_name'>
        <label for="lname">Last name</label>
        <input type="text" id="lname" name="lname" placeholder='Last name'></input>
      </div>
    </div>
        <br></br>
    <div className="fields_container">
      <div className='class_field'>
        <label for="class">Class</label>
        <select id="class" name="class">
            <option value="1" name="1">1</option>
            <option value="2" name="2">2</option>
            <option value="3" name="3">3</option>
            <option value="4" name="4">4</option>
        </select>
      </div>
      <div className="roll_field">
        <label for="form-roll-no">Roll No.</label>
        <input type="text" id="form-roll-no" name="form-roll-no"></input>
      </div>
      <div className="gen_field">
        <label for="gender">Gender</label>
        <select id="gender" name="gender">
            <option value="M" name="M">Male</option>
            <option value="F" name="F">Female</option>
            <option value="non" name="non">Other</option>
        </select>
      </div>
      <div className='session_field'>
        <label for="session">Session</label>
        <input type="text" id="session" name="session"></input>
      </div>
      <div className='blood_field'>
        <label for="blood-type">Blood Group</label>
        <select id="blood-type">
            <option value="A" name="A">A</option>
            <option value="B" name="B">B</option>
            <option value="AB" name="AB">AB</option>
            <option value="O" name="O">O</option>
        </select>
      </div>
    </div>
        <br></br>
    <div className="parents_info">
      <div className='dad_field'>
        <label for="dad-name">Father's Name</label>
        <input type="text" id="dad-name" name="dad-name" placeholder="Father's name"></input>
      </div>
      <div className='mom_field'>
        <label for="mom-name">Mother's Name</label>
        <input type="text" id="mom-name" name="mom-name" placeholder="Mother's name"></input>
      </div>
    </div>
    </>
  )
}

export default StudentInfo