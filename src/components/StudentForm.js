import React, { useState, useEffect, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import './StudentForm.css'; 

const StudentForm = ({ existingStudent }) => {
    const { addStudent, updateStudent } = useContext(StudentContext);
    
    const [student, setStudent] = useState({
        name: '',
        email: '',
        age: '',
        class: '',
        address: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (existingStudent) {
            setStudent(existingStudent);
        }
    }, [existingStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!student.name) newErrors.name = 'Name is required';
        if (!student.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(student.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!student.age) newErrors.age = 'Age is required';
        if (!student.class) newErrors.class = 'Class is required';
        if (!student.address) newErrors.address = 'Address is required';
        if (!student.phone) newErrors.phone = 'Phone is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) { 
            if (existingStudent) {
                updateStudent(student); 
            } else {
                addStudent(student);
            }
            setStudent({ name: '', email: '', age: '', class: '', address: '', phone: '' });
            setErrors({}); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <h2>{existingStudent ? 'Update Student' : 'Add Student'}</h2>
            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={student.name} 
                    onChange={handleChange} 
                    required 
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={student.email} 
                    onChange={handleChange} 
                    required 
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label>Age:</label>
                <input 
                    type="number" 
                    name="age" 
                    value={student.age} 
                    onChange={handleChange} 
                    required 
                />
                {errors.age && <span className="error">{errors.age}</span>}
            </div>
            <div className="form-group">
                <label>Class:</label>
                <input 
                    type="text" 
                    name="class" 
                    value={student.class} 
                    onChange={handleChange} 
                    required 
                />
                {errors.class && <span className="error">{errors.class}</span>}
            </div>
            <div className="form-group">
                <label>Address:</label>
                <textarea 
                    name="address" 
                    value={student.address} 
                    onChange={handleChange} 
                    required 
                />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input 
                    type="text" 
                    name="phone" 
                    value={student.phone} 
                    onChange={handleChange} 
                    required 
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <button type="submit" className="submit-button">
                {existingStudent ? 'Update' : 'Add'} Student
            </button>
        </form>
    );
};

export default StudentForm;
