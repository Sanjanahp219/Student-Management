import React from 'react';
import {  MoreVertical, Trash2, Edit, Eye  } from 'lucide-react';
import './StudentTable.css';
import { Link } from 'react-router-dom';

export default function StudentTable({ students, onDelete, onEdit, onView }) {
  return (
    <div className="table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Email</th>
            <th>Department</th>
            <th>Course</th>
            <th>Status</th>
            <th>Action</th>
            <th>View</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id.toString().padStart(2, '0')}</td>
              <td className="student-name-col">
                <div className="student-avatar">{student.name.charAt(0)}</div>
                {student.name}
              </td>
              <td>{student.email}</td>
              <td>
                <span className="badge-dept">{student.department}</span>
              </td>
              <td>{student.course}</td>
              <td>
                <span className={`badge-status ${student.status.toLowerCase()}`}>
                  {student.status}
                </span>
              </td>
              <td>
                <button className="action-btn">
                  <MoreVertical size={18} />
                </button>
               
              </td>

              <td>
                <button className="action-btn view" onClick={() => onView(student)}>
                 <Eye size={18} color="blue" />
                </button>
             </td>

             <td>
                <button className="action-btn edit" onClick={() => onEdit(student)}>
                  <Edit size={18} color="green" />
                </button>
              </td>

              <td>
                 <button className="action-btn" onClick={()=>
                  onDelete(student.id)}>
                  <Trash2 size={18} color="red"/>
                </button>
              </td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
