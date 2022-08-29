import React, { Fragment } from 'react'

const StudentCard =({
    h, handleDeleteStudent=(f)=>f,
}) =>{
    return(
        <Fragment>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https:/via.placeholder.com/900x500.png?text=Student+Picture" alt="default_student_picture" className='card-img img img-fluid' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{h.studentName}</h3>
                            <p className='card-text'>Gender: {h.gender}</p>
                            <p className='card-text'>Class: {h.studentClass}</p>
                            <p className='card-text'>Role: {h.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default StudentCard;