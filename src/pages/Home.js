import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
function Home() {
  return (
   <>
<Nav />
<div style={{display:"flex", justifyContent:"center" , alignItems:"center",height:"50vh"}}>
  <button style={{backgroundColor:"blue",padding:"2vh",border:"none",color:"white",borderRadius:"1vh",fontWeight:"500", fontSize:"4vh"}}> <Link to ="/create" style={{textDecoration:"none",color:"white"}}>Upload</Link></button>
</div>
   </>
  )
}

export default Home