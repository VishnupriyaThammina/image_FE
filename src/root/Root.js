import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import Create from '../pages/Create'
import View from '../pages/View'
import Home from '../pages/Home'

function Root() {
  return (
 <>
 <Routes>
    <Route path = "/create" element={<Create />} />
    <Route path = "/view" element={<View/>} />
    <Route path = "/" element={<Home/>} />
 </Routes>
 </>
  )
}

export default Root