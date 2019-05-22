import React from 'react'

const Form = (props) => {
  function goBack() { 
    props.history.goBack();
  }
  return (
    <div>
      <h1>Im a Form</h1>
      <button onClick={goBack}>Back</button>
      <button onClick={() => {props.history.goBack()}}>Back 2</button>
    </div>
  )
}

export default Form
