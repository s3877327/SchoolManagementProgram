import React from "react";
import ClassInfo from "./ClassInfo";
import PersonalInfo from "./PersonalInfo";
import SchoolInfo from "./SchoolInfo";
import ScoreTable from "./ScoreTable";
import TeacherNote from "./TeacherNote";

function StudentProfile() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <SchoolInfo />
        </div>
      </div>
      <div className="h4 pb-2 mb-4 text-danger border-top border-dark"></div>
      <div className="row justify-content-left">
        <div class="col">
          <ClassInfo />
        </div>
        <div className="col">
          <PersonalInfo />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ScoreTable />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TeacherNote />
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
