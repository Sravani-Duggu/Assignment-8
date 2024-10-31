import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Student Management</h1>
            <ul style={styles.navLinks}>

                <li>
                    <Link style={styles.link} to="/">Dashboard</Link>
                </li>

                <li>
                    <Link style={styles.link} to="/students">Student List</Link>
                </li>

                <li>
                    <Link style={styles.link} to="/register">Register Student</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
    },
    title: {
        margin: 0,
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
};

export default Navbar;