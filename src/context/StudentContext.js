import React, { createContext, useState, useEffect } from 'react';
import studentsData from '../Students.json';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(studentsData);
    }, []);

    const addStudent = (newStudent) => {
        setStudents(prevStudents => [...prevStudents, { id: prevStudents.length + 1, ...newStudent }]);
    };
    
    const updateStudent = (updatedStudent) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === updatedStudent.id ? updatedStudent : student
            )
        );
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };


    return (
        <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    );
};
