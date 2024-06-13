import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import SignUp from './components/auth/signUp/SignUp'
import Login from './components/auth/login/Login'
function App() {
 return (
  <div>
   <Router>
    <Routes>
    <Route path="/signup"  element={<SignUp />} />
    <Route path="/login"  element={<Login />} />
   </Routes>
   </Router>
  </div>
 )

}
export default App
