import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const { students } = useContext(StudentContext);

    const totalStudents = students.length;

    const classDistribution = {};
    students.forEach(student => {
        classDistribution[student.class] = (classDistribution[student.class] || 0) + 1;
    });
    
    const classData = Object.entries(classDistribution).map(([className, count]) => ({
        className,
        count
    }));

    const ageGroups = {
        'Under 10': 0,
        '10-15': 0,
        '15-20': 0,
        '20+': 0
    };

    students.forEach(student => {
        const age = parseInt(student.age, 10);
        if (age < 10) ageGroups['Under 10'] += 1;
        else if (age <= 15) ageGroups['10-15'] += 1;
        else if (age <= 20) ageGroups['15-20'] += 1;
        else ageGroups['20+'] += 1;
    });

    const ageData = Object.entries(ageGroups).map(([group, count]) => ({
        group,
        count
    }));

    const enrollmentByYearData = [
        { year: '2021', enrollments: 120 },
        { year: '2022', enrollments: 140 },
        { year: '2023', enrollments: 160 },
    ];

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>

            <div className="total-students">
                <h3>Total Students</h3>
                <p>{totalStudents}</p>
            </div>

            <h3>Class Distribution</h3>
            <BarChart width={500} height={300} data={classData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="className" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>

            <h3>Age Group Distribution</h3>
            <BarChart width={500} height={300} data={ageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="group" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#FFBB28" />
            </BarChart>

            <h3>Enrollment by Year</h3>
            <BarChart width={500} height={300} data={enrollmentByYearData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="enrollments" fill="#8884d8" />
            </BarChart>

            <div className="placeholder-section">
                <h3>Top Performing Classes (Feature Placeholder)</h3>
                <p>Shows the highest performing classes when data is available.</p>
                
                <h3>Attendance Rate (Feature Placeholder)</h3>
                <p>Displays the average attendance rate per class if attendance data is tracked.</p>
            </div>
        </div>
    );
};

export default Dashboard;
