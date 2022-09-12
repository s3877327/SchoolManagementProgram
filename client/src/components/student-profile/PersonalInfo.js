import React from 'react'

const PersonalInfo = ({h})=> {
  return (
    <div>
        <p>Gender: </p>
        <p>Father's name: {h.fathername}</p>
        <p>Mother's name: </p>
    </div>
  )
}

export default PersonalInfo