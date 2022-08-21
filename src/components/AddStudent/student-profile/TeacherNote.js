import React from "react";

function TeacherNote() {
  return (
    <div class="input-group">
      <span class="input-group-text">Teacher's Note</span>
      <textarea class="form-control" aria-label="With textarea"></textarea>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}

export default TeacherNote;
