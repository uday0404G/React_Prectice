import React from 'react'
import Logic from './Logic'

const Hoc1 = (props) => {
    return (
        <div style={{backgroundColor : props.clr}}>
            <h6>First Component</h6>
            <button onClick={props.h}>ADD</button>
            <button onClick={props.h5}>aDD 5</button>
        </div>
      )
}

export default Logic( Hoc1)
