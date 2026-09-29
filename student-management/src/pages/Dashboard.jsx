import React, { useState, useEffect } from "react";
import { Users, BookOpen, UserCheck } from "lucide-react";
import "./Dashboard.css";

export default function Dashboard() {
  // Mock data: to be replaced by fetch/axios call to Java Servlet API
  const [dashboardStats, setDashboardStats] = useState({
    totalStudents: 248,
    activeStudents: 221,
    courses: 12,
    departments: 6
  });

  return (
    <div className="dashboard-container">
      {/* Page Header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Manage and monitor student records</p>
      </div>

      {/* Top Statistic Cards */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon students">
            <Users size={24} />
          </div>
          <div className="stat-details">
            <h3>Students</h3>
            <h2>{dashboardStats.totalStudents}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon courses">
            <BookOpen size={24} />
          </div>
          <div className="stat-details">
            <h3>Courses</h3>
            <h2>{dashboardStats.courses}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon active-students">
            <UserCheck size={24} />
          </div>
          <div className="stat-details">
            <h3>Active</h3>
            <h2>{dashboardStats.activeStudents}</h2>
          </div>
        </div>
      </div>

      {/* Bottom Main Content */}
      <div className="dashboard-main">
        {/* Chart Section */}
        <div className="chart-card">
          <h3>Student Statistics</h3>
          <div className="chart-placeholder">
            <span style={{ fontSize: "40px" }}>📊</span>
            <p>Chart Area</p>
          </div>
        </div>

        {/* Recent Students List */}
        <div className="recent-card">
          <h3>Recent Students</h3>
          <ul className="recent-list">
            <li>
              <div className="avatar">R</div>
              <span>Rahul</span>
            </li>
            <li>
              <div className="avatar">P</div>
              <span>Priya</span>
            </li>
            <li>
              <div className="avatar">A</div>
              <span>Arjun</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}