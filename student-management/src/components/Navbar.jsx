import React from "react";
import { Menu, Search, Bell, User, LogOut } from "lucide-react";
import "./Navbar.css";


export default function Navbar() {
    return (
        <>
        <header className="navbar">
            <div className="navbar-right">
               <div className="search-container">
                    <Search size={18} className="search-icon" />
                     <input type="text" placeholder="Search students..." className="search-input"/> 
                </div>
                
                <button className="icon-btn">
                    <Bell size={20} />
                </button>
                
                <div className="user-profile">
                    <div className="avatar">
                        <User size={18} />
                    </div>
                    <span className="username">Sanjana</span>
                </div>
            </div>
        </header>
        </>
    );
}