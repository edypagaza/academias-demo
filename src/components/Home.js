import React from 'react'

const Home = (props) => {
  function goBack() { 
    props.history.goBack();
  }
  return (
    <div>
      <h1>Hi! I'm your home</h1>
      <p>Here we are going to learn about react router.</p>
      <button onClick={goBack}>Back</button>
    </div>
  )
}

export default Home
