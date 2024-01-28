import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
    <div style={{width:"20%", padding:"2vh",display:"flex", justifyContent:"center" , alignItems:"center"}}> <Link to ="/"> Home</Link></div>
    <div style={{width:"20%", padding:"2vh",display:"flex", justifyContent:"center" , alignItems:"center"}}> <Link to ="/create"> Create</Link></div>
    <div style={{width:"20%", padding:"2vh",display:"flex", justifyContent:"center" , alignItems:"center"}}> <Link to ="/view"> View</Link></div>
    
       </div>
  )
}

export default Nav