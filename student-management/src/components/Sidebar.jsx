import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, LayoutDashboard, Users, ChevronRight,ChevronDown,BookOpen, Building2,FileText,PieChart,Settings, HelpCircle,MoreVertical, Menu} from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
    // State to handle the opening/closing of the Students dropdown
    const [isSidebaropen, setIsSidebaropen] = useState(true);
    const [isStudentsOpen, setIsStudentsOpen] = useState(false);

    return (
        <aside className={`sidebar ${!isSidebaropen ? 'collapsed' : ''}`}>
            {/* Header / Logo */}
            <div className="sidebar-header">
                <div className="logo-icon-container">
                    <GraduationCap size={24} />
                </div>
                <div className="logo-text">
                    <h2>Student Management</h2>
                    <span>SYSTEM</span>
                </div>

                <button className="menu" onClick={() => setIsSidebaropen(!isSidebaropen)}>
                    <Menu size={24} />
                </button>
            </div>
            
            <div className="sidebar-scrollable">
                {/* MAIN Section */}
                <div className="sidebar-section">
                    <h3 className="section-title">MAIN</h3>
                    <nav className="sidebar-nav">
                        <Link to="/" className="nav-item">
                            <LayoutDashboard size={18} />
                            <span>Dashboard</span>
                        </Link>
                        
                        {/* Students Dropdown */}
                        <div className="nav-group">
                            <button className={`nav-item ${isStudentsOpen ? 'active' : ''}`}
                            onClick={() => setIsStudentsOpen(!isStudentsOpen)}>
                                <Users size={18} />
                                <span>Students</span>
                                {isStudentsOpen ? (
                                    <ChevronDown size={16} className="chevron" />
                                ) : (
                                    <ChevronRight size={16} className="chevron" />
                                )}
                            </button>
                            
                            {/* Render these links only if isStudentsOpen is true */}
                            {isStudentsOpen && (
                                <div className="sub-menu">
                                    <Link to="/students" className="sub-item">All Students</Link>
                                    <Link to="/add-student" className="sub-item">Add Student</Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>

                {/* ACADEMICS Section */}
                <div className="sidebar-section">
                    <h3 className="section-title">ACADEMICS</h3>
                    <nav className="sidebar-nav">
                        <a href="#" className="nav-item">
                            <BookOpen size={18} />
                            <span>Courses</span>
                        </a>
                        <a href="#" className="nav-item">
                            <Building2 size={18} />
                            <span>Departments</span>
                        </a>
                    </nav>
                </div>

                {/* REPORTS Section */}
                <div className="sidebar-section">
                    <h3 className="section-title">REPORTS</h3>
                    <nav className="sidebar-nav">
                        <a href="#" className="nav-item">
                            <FileText size={18} />
                            <span>Student Reports</span>
                        </a>
                        <a href="#" className="nav-item">
                            <PieChart size={18} />
                            <span>Analytics</span>
                        </a>
                    </nav>
                </div>

                {/* SYSTEM Section */}
                <div className="sidebar-section">
                    <h3 className="section-title">SYSTEM</h3>
                    <nav className="sidebar-nav">
                        <a href="#" className="nav-item">
                            <Settings size={18} />
                            <span>Settings</span>
                        </a>
                        <a href="#" className="nav-item">
                            <HelpCircle size={18} />
                            <span>Help & Support</span>
                        </a>
                    </nav>
                </div>
            </div>

            {/* Footer / User Profile */}
            <div className="sidebar-footer">
                <div className="user-info">
                    {/* Using an initial for the avatar, which looks very clean */}
                    <div className="user-avatar">
                        S
                    </div>
                    <div className="user-details">
                        <span className="user-name">Sanjana H P</span>
                        <span className="user-role">Administrator</span>
                    </div>
                </div>
                <button className="more-btn">
                    <MoreVertical size={18} />
                </button>
            </div>
        </aside>
    );
}
