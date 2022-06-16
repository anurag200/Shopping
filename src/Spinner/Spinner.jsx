import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <>
      <div className="loading mx-auto mt-5">
        <div className="arc"></div>
        <div className="arc"></div>
        <div className="arc"></div>
      </div>
    </>
  )
}

export default Spinner
