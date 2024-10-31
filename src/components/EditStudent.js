import React, { useContext, useState, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const { students, updateStudent } = useContext(StudentContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [ student, setStudent ] = useState(null);

    useEffect(() => {
        const foundStudent = students.find((s) => s.id === parseInt(id));
        if (foundStudent) {
            setStudent(foundStudent);
        }
    }, [id, students]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prev) => ({
            ...prev,
            [name] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (student) {
            updateStudent(student);
            navigate('/students');
        } else {
            alert('Please fill in all fields.');
        }
    };

    if (!student) {
        return <p>Loading student data...</p>
    }

    return (
        <div className="edit-student">
            <h2>Update Student Information</h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>ID:</label>
                    <input type="text" name='id' value={student.id} readOnly />
                </div>

                <div>
                    <label>Name:</label>
                    <input type="text" name='name' value={student.name || ''} onChange={handleChange} />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" name='email' value={student.email || ''} onChange={handleChange} />
                </div>

                <div>
                    <label>Age:</label>
                    <input type="number" name='age' value={student.age || ''} onChange={handleChange}/>
                </div>

                <div>
                    <label>Class:</label>
                    <input type="text" name='class' value={student.class || ''} onChange={handleChange} />
                </div>

                <div>
                    <label>Address:</label>
                    <input type="text" name='address' value={student.address || ''} onChange={handleChange} />
                </div>

                <div>
                    <label>Phone:</label>
                    <input type="tel" name='phone' value={student.phone || ''} onChange={handleChange} />
                </div>

                <button type='submit'>Save Changes</button>
                <button type='button' onClick={() => navigate('/students')}>Back to List</button>
            </form>
        </div>
    );
};

export default EditStudent;