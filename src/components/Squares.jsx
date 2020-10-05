import React from 'react'

function Squares({ value, onClick }) {
  return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
  )
}

export default Squares
