import React from 'react'

function Card(props) {
  return (
   <>
   <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"3vh",border:"2px solid black"}}>
    <img src={props.img} alt={props.name}/>
   </div>
   </>
  )
}

export default Card