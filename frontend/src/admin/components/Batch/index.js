import React from 'react'
import './index.css'
import { FaUserGraduate } from "react-icons/fa";

const index = ({batch}) => {
  return (
    <div className="Student_batch">
    <h1>
      <FaUserGraduate /> {batch}
    </h1>
    <h5>Batch</h5>
  </div>
  )
}

export default index