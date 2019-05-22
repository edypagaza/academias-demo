import React from 'react'

const User = (props) => {
  function returnHome() { 
    props.history.push('/');
  }
  return (
    <div>
      <h1>Im a User</h1>
      <button onClick={returnHome}>Return</button>
      <button onClick={() => {props.history.push('/')}}>Return 2</button>
    </div>
  )
}

export default User
