import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
    )
}

export default Logout;