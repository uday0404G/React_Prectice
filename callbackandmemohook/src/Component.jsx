import React, { memo } from 'react'

const Component = ({handlClick}) => {
    console.log("Child Component");
  return (
    <div>Component
<button onClick={()=>handlClick()}>Child button</button>

    </div>
  )
}

export default memo(Component)