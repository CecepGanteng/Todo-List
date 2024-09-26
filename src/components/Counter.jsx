import React from 'react'

function Counter({completedTodos, totalTodos}) {
  return (
    <div className='containerBorder flexSpaceEvenly footer taskText'>
        <h2>Task Done: {completedTodos}</h2>
        <h2>Task Not Done: {totalTodos}</h2>
    </div>
  )
}

export default Counter