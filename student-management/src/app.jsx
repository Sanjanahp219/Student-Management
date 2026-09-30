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
import EditStudent from './pages/EditStudent.jsx'
import ViewStudent from './pages/ViewStudent.jsx'
import Departments from './pages/Departments.jsx'
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
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/student/:id" element={<ViewStudent />} />
          <Route path="/departments" element={<Departments />} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </Router>
  )
}
