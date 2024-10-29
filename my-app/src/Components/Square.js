import React from 'react'
import '../App.css';

function Square(Props) {
  return (
    <div onClick={Props.onclick}
     className='square' style={{border:'1px solid',
        height:'200px',width:'100%',
         display:'flex',justifyContent:'center',
          alignItems:'center',fontSize:'40px'
    }}>
      <h1
      >{Props.value}</h1>
    </div>
  )
}

export default Square
