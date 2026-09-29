import React from 'react';
import { MoreVertical } from 'lucide-react';
import './StudentTable.css';

export default function StudentTable({ students }) {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
