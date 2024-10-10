import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Aboutus from '../Pages/Aboutus'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Courses from '../Pages/Courses'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/'   element={<Home/>}/>
        <Route path='/contact'   element={<Contact/>}/>
        <Route path='/course'   element={<Courses/>}/>
        <Route path='/aboutus'   element={<Aboutus/>}/>
        <Route path='/'   element={<Home/>}/>
       
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
