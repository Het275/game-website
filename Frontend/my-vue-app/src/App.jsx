import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'
import Blogs from './Components/Blogs'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
