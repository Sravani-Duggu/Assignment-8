import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { StudentProvider } from './context/StudentContext';
import EditStudent from './components/EditStudent';



const App = () => {
    return (
        <StudentProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/students" element={<StudentList />} />
                <Route path="/register" element={<StudentForm/>} />
                <Route path="/students/:id" element={<StudentDetails/>} />
                <Route path="/edit/:id" element={<StudentForm/>} />
                <Route path="/students/edit/:id" element={<EditStudent />} />
            </Routes>
        </StudentProvider>
    );
};

export default App;