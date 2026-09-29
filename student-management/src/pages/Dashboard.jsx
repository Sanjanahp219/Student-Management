import React, { useState, useEffect } from "react";
import { Users, BookOpen, UserCheck } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Dashboard.css";

export default function Dashboard() {
  // Mock data: to be replaced by fetch/axios call to Java Servlet API
  const [dashboardStats, setDashboardStats] = useState({
    totalStudents: 248,
    activeStudents: 221,
    courses: 12,
    departments: 6
  });

  const chartData = [
    { month: 'Jan', total: 150, active: 120 },
    { month: 'Feb', total: 180, active: 160 },
    { month: 'Mar', total: 200, active: 180 },
    { month: 'Apr', total: 220, active: 200 },
    { month: 'May', total: 240, active: 215 },
    { month: 'Jun', total: 248, active: 221 },
  ];

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
          <div className="chart-container" style={{ width: '100%', height: '300px', marginTop: '20px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 14}} tickMargin={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 14}} />
                <Tooltip 
                  cursor={{fill: 'rgba(0,0,0,0.04)'}} 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}} 
                />
                <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                <Bar dataKey="total" fill="#4f46e5" name="Total Students" radius={[4, 4, 0, 0]} barSize={24} />
                <Bar dataKey="active" fill="#10b981" name="Active Students" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
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