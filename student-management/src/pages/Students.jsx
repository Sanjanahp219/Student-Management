import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import StudentTable from '../components/StudentTable';
import { students as initialStudents } from '../data/students';
import './Students.css';

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [studentsData, setStudentsData] = useState(initialStudents);

  return (
    <div className="students-page-container">
      <div className="students-header">
        <h1>Students</h1>
        <p>Manage and view all student records</p>
      </div>

      <div className="table-card">
        {/* Table Toolbar */}
        <div className="table-toolbar">
          <div className="search-bar">
            <Search size={18} color="#6b7280" />
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn-primary">
            <Plus size={18} />
            Add Student
          </button>
        </div>

        {/* Filters */}
        <div className="table-filters">
          <select className="filter-select">
            <option>Department</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>ISE</option>
          </select>
          <select className="filter-select">
            <option>Course</option>
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Information Science</option>
          </select>
          <select className="filter-select">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Table Component */}
        <StudentTable students={studentsData} />
      </div>
    </div>
  );
}
