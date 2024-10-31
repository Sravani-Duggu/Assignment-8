import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import './StudentDetails.css';

const StudentDetails = () => {
    const { id } = useParams();
    const { students } = useContext(StudentContext);
    const student = students.find((s) => s.id === parseInt(id));

    if (!student) {
        return <p>Student not found.</p>
    }

    return (
        <div className="student-details">
            <div className="card">
                <h2>Student Details</h2>
                <div className="details">
                    <p><strong>ID:</strong> <span>{student.id}</span></p>
                    <p><strong>Name:</strong> <span>{student.name}</span></p>
                    <p><strong>Email:</strong> <span>{student.email}</span></p>
                    <p><strong>Age:</strong> <span>{student.age}</span></p>
                    <p><strong>Class:</strong> <span>{student.class}</span></p>
                    <p><strong>Address:</strong> <span>{student.address}</span></p>
                    <p><strong>Phone:</strong> <span>{student.phone}</span></p>
                </div>
                <Link to="/students" className='back-button'>Back to List</Link>
            </div>
        </div>
    );
};

export default StudentDetails; 