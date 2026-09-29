import { useState } from 'preact/hooks'
import heroImg from './assets/hero.png'
import preactLogo from './assets/preact.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Students from './pages/Students.jsx'
import AddStudent from './pages/AddStudent.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import './app.css'

export function App() {

  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </Router>
  )
}
