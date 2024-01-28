import React, { useState,useEffect } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import axios from 'axios'
function View() {
    const [images,setImages] = useState([]);
useEffect(()=>{
handleGetImages();
},[])
    async function handleGetImages (){
   try {
    const res = await axios.get("https://image-api-backend.vercel.app/images");
    setImages(res.data)
    console.log(res.data)
   } catch (error) {
    console.log("ERROR IN GETTING images from backend",error)
   }    
    }
  return (
<>
<Nav />
<div>
{images.map((image, index) => (
                    <Card key={index} img={image.url} alt={`Image ${index + 1}`} />
                ))}

</div>
</>
  )
}

export default View