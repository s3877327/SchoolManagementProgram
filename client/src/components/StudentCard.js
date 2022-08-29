import React, { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const StudentCard = ({ h, handleDeleteStudent = (f) => f }) => {
    const navigate = useNavigate();
  return (
    <Fragment>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {h.image && h.image.contentType ? (
              <img
                src={`${process.env.REACT_APP_API}/students/image/${h._id}`}
                alt="student_picture"
                className="card-image img img-fluid img-size"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=student+picture"
                alt="student_picture"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{h.studentName}</h3>
              <p className="card-text">Gender: {h.gender}</p>
              <p className="card-text">Class: {h.studentClass}</p>
              <p className="card-text">Role: {h.role}</p>
              <div className="d-flex justify-content-between h4">
                <button
                  onClick={() => navigate(`/view-student/${h._id}`)}
                  className="btn btn-primary"
                >
                  Show more
                </button>
                <Link to={`/edit-student/${h._id}`}>
                  <EditOutlined className="text-warning" />
                </Link>
                <DeleteOutlined
                  onClick={() => handleDeleteStudent(h._id)}
                  className="text-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentCard;
