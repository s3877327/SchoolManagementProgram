import { Fragment, React, useState } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import {  useSelector } from "react-redux";

const StudentDetailForm = (props) => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const { values, setValues, handleChange, handleImageChange, handleSubmit } =
    props;
  const { Option } = Select;
  const [preview, setPreview] = useState(
    "http://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  const {
    studentName,
    phone,
    email,
    studentClass,
    role,
    gender,
    fatherName,
    motherName,
    image,
  } = values;
  return (
    <Fragment>
      
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-secondary btn-block m-2 text-left">
          Image
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </label>
        <input
          type="text"
          name="studentName"
          onChange={handleChange}
          placeholder="Student Name"
          className="form-control m-2"
          value={studentName}
        />
        <input
          type="number"
          name="phone"
          onChange={handleChange}
          placeholder="Phone Number"
          className="form-control m-2"
          value={phone}
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="form-control m-2"
          value={email}
        />
        <input
          type="studentClass"
          name="studentClass"
          onChange={handleChange}
          placeholder="Class"
          className="form-control m-2"
          value={studentClass}
        />
        <input
          type="number"
          name="role"
          onChange={handleChange}
          placeholder="Role"
          className="form-control m-2"
          value={role}
        />

        <Select
          onChange={(value) => setValues({ ...values, gender: value })}
          className="w-100 m-2"
          size="large"
          placeholder='Gender'
        >
          <Option key={1}>Male</Option>
          <Option key={2}>Female</Option>
        </Select>

        <input
          type="text"
          name="fatherName"
          onChange={handleChange}
          placeholder="Father Name"
          className="form-control m-2"
          value={fatherName}
        />
        <input
          type="text"
          name="motherName"
          onChange={handleChange}
          placeholder="Mother Name"
          className="form-control m-2"
          value={motherName}
        />
      </div>
      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
    </Fragment>
  )
}

export default StudentDetailForm