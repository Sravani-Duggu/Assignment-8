import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Link } from 'react-router-dom';
import { FaSortAlphaDown, FaSortAlphaUpAlt } from 'react-icons/fa';
import './StudentList.css';

const StudentList = () => {
    const { students, deleteStudent } = useContext(StudentContext);

    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 10;
    const totalPages = Math.ceil(students.length / studentsPerPage);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterClass, setFilterClass] = useState('');
    const [sortType, setSortType] = useState(null); 

    const filteredStudents = students
        .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(student => (filterClass ? student.class === filterClass : true))
        .sort((a, b) => {
            if (sortType === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortType === 'class') {
                return a.class.localeCompare(b.class);
            }
            return 0;
        });

    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

    const goToPreviousPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    const goToNextPage = () => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            deleteStudent(id);
        }
    };

    return (
        <div className="student-list">
            <h2>Student List</h2>

            <div className="search-filter-controls">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="control-input"
                />
                
                <select
                    value={filterClass}
                    onChange={(e) => setFilterClass(e.target.value)}
                    className="control-dropdown"
                >
                    <option value="">All Classes</option>
                    <option value="10th Grade">10th Grade</option>
                    <option value="11th Grade">11th Grade</option>
                    <option value="12th Grade">12th Grade</option>
                </select>

                <button className="sort-button" onClick={() => setSortType('name')}>
                    <FaSortAlphaDown /> Sort by Name
                </button>
                <button className="sort-button" onClick={() => setSortType('class')}>
                    <FaSortAlphaUpAlt /> Sort by Class
                </button>
            </div>

            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentStudents.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.class}</td>
                            <td>
                                <Link to={`/students/${student.id}`} className="button view-button">View</Link>
                                <Link to={`/students/edit/${student.id}`} className="button edit-button">Edit</Link>
                                <button onClick={() => handleDelete(student.id)} className="button delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination-controls">
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default StudentList;
