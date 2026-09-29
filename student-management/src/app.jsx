import { useState } from 'preact/hooks'
import heroImg from './assets/hero.png'
import preactLogo from './assets/preact.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'


import './app.css'

export function App() {

  return (
    <>
      
      <Navbar/>
      <Sidebar/>
      <main className="main-content">
        <Dashboard />
      </main>
      {/* <Footer/> */}
    </>
  )
}
